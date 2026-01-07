"use client";

import { useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import imageCompression from "browser-image-compression";

interface CompressedImage {
  file: File;
  originalFile: File;
  originalSize: number;
  compressedSize: number;
  url: string;
  format: string;
  webpFile?: File;
  webpUrl?: string;
  webpSize?: number;
}

interface ProcessingProgress {
  current: number;
  total: number;
  type: "compressing" | "converting";
}

export default function ImageCompressor() {
  const t = useTranslations("compressor");
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [convertingWebP, setConvertingWebP] = useState<number | null>(null);
  const [convertingAllWebP, setConvertingAllWebP] = useState(false);
  const [directToWebP, setDirectToWebP] = useState(false);
  const [showWebpTooltip, setShowWebpTooltip] = useState(false);
  const [processingProgress, setProcessingProgress] = useState<ProcessingProgress | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1920);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (!bytes || bytes === 0 || isNaN(bytes)) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const sizeIndex = Math.min(i, sizes.length - 1);
    return Math.round((bytes / Math.pow(k, sizeIndex)) * 100) / 100 + " " + sizes[sizeIndex];
  };

  const convertToWebPFormat = useCallback(
    async (file: File, quality: number): Promise<File> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d");
            if (!ctx) {
              reject(new Error("Canvas context not available"));
              return;
            }

            ctx.drawImage(img, 0, 0);

            canvas.toBlob(
              (blob) => {
                if (!blob) {
                  reject(new Error("Failed to convert to WebP"));
                  return;
                }

                const webpFile = new File(
                  [blob],
                  file.name.replace(/\.[^/.]+$/, "") + ".webp",
                  {
                    type: "image/webp",
                    lastModified: Date.now(),
                  }
                );
                resolve(webpFile);
              },
              "image/webp",
              quality
            );
          };
          img.onerror = () => reject(new Error("Failed to load image"));
          img.src = e.target?.result as string;
        };
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });
    },
    []
  );

  const compressImage = useCallback(
    async (file: File): Promise<CompressedImage | null> => {
      try {
        // 바로 WebP 변환 모드인 경우
        if (directToWebP) {
          const webpFile = await convertToWebPFormat(file, quality);
          
          // WebP 크기가 원본보다 크면 원본 사용
          if (webpFile.size >= file.size) {
            const url = URL.createObjectURL(file);
            return {
              file: file,
              originalFile: file,
              originalSize: file.size,
              compressedSize: file.size,
              url,
              format: file.type,
            };
          }
          
          const webpUrl = URL.createObjectURL(webpFile);
          
          return {
            file: webpFile,
            originalFile: file,
            originalSize: file.size,
            compressedSize: webpFile.size,
            url: webpUrl,
            format: "image/webp",
            webpFile,
            webpUrl,
            webpSize: webpFile.size,
          };
        }

        // 일반 압축 모드
        // 이미 작은 파일(100KB 미만)은 압축하지 않음
        if (file.size < 100 * 1024) {
          const url = URL.createObjectURL(file);
          return {
            file: file,
            originalFile: file,
            originalSize: file.size,
            compressedSize: file.size,
            url,
            format: file.type,
          };
        }

        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: Math.max(maxWidth, maxHeight),
          useWebWorker: true,
          fileType: file.type,
          initialQuality: quality,
        };

        const compressedFile = await imageCompression(file, options);
        
        // 압축 후 크기가 원본보다 크거나 같으면 원본 사용
        const finalFile = compressedFile.size >= file.size ? file : compressedFile;
        const url = URL.createObjectURL(finalFile);

        return {
          file: finalFile,
          originalFile: file,
          originalSize: file.size,
          compressedSize: finalFile.size,
          url,
          format: finalFile.type,
        };
      } catch (error) {
        console.error(t("error"), error);
        return null;
      }
    },
    [quality, maxWidth, maxHeight, directToWebP, convertToWebPFormat, t]
  );

  const convertImageToWebP = useCallback(
    async (image: CompressedImage, index: number) => {
      setConvertingWebP(index);
      try {
        // 원본 파일 크기를 기준으로 비교하기 위해 원본 파일 사용
        const sourceFile = image.originalFile || image.file;
        const webpFile = await convertToWebPFormat(sourceFile, quality);
        const webpUrl = URL.createObjectURL(webpFile);

        // WebP 크기가 원본보다 크면 변환하지 않음
        if (webpFile.size >= sourceFile.size) {
          // 사용자에게 알림 (선택사항: 경고 메시지 표시)
          console.warn("WebP conversion resulted in larger file size");
          setConvertingWebP(null);
          return;
        }

        setImages((prev) =>
          prev.map((img, i) =>
            i === index
              ? {
                  ...img,
                  webpFile,
                  webpUrl,
                  webpSize: webpFile.size,
                }
              : img
          )
        );
      } catch (error) {
        console.error(t("webpConversionError"), error);
      } finally {
        setConvertingWebP(null);
      }
    },
    [convertToWebPFormat, quality, t]
  );

  const convertAllToWebP = useCallback(async () => {
    setConvertingAllWebP(true);
    const imagesToConvert = images.filter((img) => !img.webpFile);
    
    setProcessingProgress({ 
      current: 0, 
      total: imagesToConvert.length, 
      type: "converting" 
    });

    for (let i = 0; i < imagesToConvert.length; i++) {
      const imageIndex = images.findIndex((img) => img === imagesToConvert[i]);
      setProcessingProgress({ 
        current: i + 1, 
        total: imagesToConvert.length, 
        type: "converting" 
      });
      
      try {
        const sourceFile = imagesToConvert[i].originalFile || imagesToConvert[i].file;
        const webpFile = await convertToWebPFormat(sourceFile, quality);
        
        // WebP 크기가 원본보다 크면 변환하지 않음
        if (webpFile.size >= sourceFile.size) {
          continue;
        }
        
        const webpUrl = URL.createObjectURL(webpFile);

        setImages((prev) =>
          prev.map((img, idx) =>
            idx === imageIndex
              ? {
                  ...img,
                  webpFile,
                  webpUrl,
                  webpSize: webpFile.size,
                }
              : img
          )
        );
      } catch (error) {
        console.error(t("webpConversionError"), error);
      }
    }

    setConvertingAllWebP(false);
    setProcessingProgress(null);
  }, [images, convertToWebPFormat, quality, t]);

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      setIsCompressing(true);
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      setProcessingProgress({ 
        current: 0, 
        total: imageFiles.length, 
        type: "compressing" 
      });

      const compressedImages: CompressedImage[] = [];

      for (let i = 0; i < imageFiles.length; i++) {
        setProcessingProgress({ 
          current: i + 1, 
          total: imageFiles.length, 
          type: "compressing" 
        });
        
        const compressed = await compressImage(imageFiles[i]);
        if (compressed) {
          compressedImages.push(compressed);
        }
      }

      setImages((prev) => [...prev, ...compressedImages]);
      setIsCompressing(false);
      setProcessingProgress(null);
    },
    [compressImage]
  );

  const downloadWebP = useCallback((image: CompressedImage) => {
    if (!image.webpFile || !image.webpUrl) return;
    const link = document.createElement("a");
    link.href = image.webpUrl;
    link.download = image.webpFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const downloadAllWebP = useCallback(() => {
    images.forEach((image) => {
      if (image.webpFile && image.webpUrl) {
        setTimeout(() => downloadWebP(image), 100);
      }
    });
  }, [images, downloadWebP]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (dropZoneRef.current) {
        dropZoneRef.current.classList.remove(
          "border-indigo-500",
          "bg-indigo-50",
          "scale-105"
        );
      }
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.add(
        "border-indigo-500",
        "bg-indigo-50",
        "scale-105"
      );
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove(
        "border-indigo-500",
        "bg-indigo-50",
        "scale-105"
      );
    }
  }, []);

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
    },
    [handleFiles]
  );

  const downloadImage = useCallback((image: CompressedImage) => {
    const link = document.createElement("a");
    link.href = image.url;
    link.download = image.file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const downloadAll = useCallback(() => {
    images.forEach((image) => {
      setTimeout(() => downloadImage(image), 100);
    });
  }, [images, downloadImage]);

  const clearAll = useCallback(() => {
    images.forEach((image) => {
      URL.revokeObjectURL(image.url);
      if (image.webpUrl) {
        URL.revokeObjectURL(image.webpUrl);
      }
    });
    setImages([]);
  }, [images]);

  const removeImage = useCallback(
    (index: number) => {
      const image = images[index];
      URL.revokeObjectURL(image.url);
      if (image.webpUrl) {
        URL.revokeObjectURL(image.webpUrl);
      }
      setImages((prev) => prev.filter((_, i) => i !== index));
    },
    [images]
  );

  const compressionRatio = (original: number, compressed: number): number => {
    if (!original || original === 0 || isNaN(original) || !compressed || isNaN(compressed)) {
      return 0;
    }
    const ratio = (1 - compressed / original) * 100;
    return Math.max(0, Math.round(ratio));
  };

  const hasUnconvertedWebP = images.some((img) => !img.webpFile);

  return (
    <div className="w-full">
      {/* 처리 모드 선택 */}
      {images.length === 0 && (
        <div className="mb-6 p-4 bg-white rounded-xl border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={directToWebP}
                  onChange={(e) => setDirectToWebP(e.target.checked)}
                  className="w-4 h-4 text-slate-900 border-slate-300 rounded focus:ring-slate-500"
                />
                <span className="text-sm font-medium text-slate-900">
                  {t("directToWebP.title")}
                </span>
                <div className="relative inline-block">
                  <button
                    type="button"
                    onMouseEnter={() => setShowWebpTooltip(true)}
                    onMouseLeave={() => setShowWebpTooltip(false)}
                    className="w-4 h-4 rounded-full bg-slate-400 text-white text-xs flex items-center justify-center hover:bg-slate-500"
                  >
                    ?
                  </button>
                  {showWebpTooltip && (
                    <div
                      ref={tooltipRef}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl z-50"
                    >
                      <p className="font-semibold mb-1">{t("webp.whatIsWebP")}</p>
                      <p className="text-slate-300 leading-relaxed">
                        {t("webp.tooltipDescription")}
                      </p>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  )}
                </div>
              </label>
              <p className="text-xs text-slate-500 mt-1 ml-6">
                {t("directToWebP.description")}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 드롭 존 */}
      <div
        ref={dropZoneRef}
        className="group relative border-2 border-dashed border-slate-300 rounded-2xl py-20 px-8 text-center cursor-pointer transition-all duration-300 bg-white/50 backdrop-blur-sm mb-8 hover:border-slate-400 hover:bg-white/70 hover:shadow-lg"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        <div className="pointer-events-none">
          <div className="text-7xl mb-6 transition-transform duration-300 group-hover:scale-110">
            📸
          </div>
          <p className="text-2xl font-medium text-slate-800 mb-2">
            {t("dropZone.title")}
          </p>
          <p className="text-sm text-slate-500">{t("dropZone.subtitle")}</p>
        </div>
      </div>

      {/* 진행률 표시 */}
      {(isCompressing || convertingAllWebP || processingProgress) && (
        <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-slate-900">
              {processingProgress?.type === "compressing"
                ? t("compressing")
                : t("webp.convertingAll")}
            </p>
            {processingProgress && (
              <span className="text-sm text-slate-500">
                {processingProgress.current} / {processingProgress.total}
              </span>
            )}
          </div>
          {processingProgress && (
            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-slate-900 h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: `${(processingProgress.current / processingProgress.total) * 100}%`,
                }}
              ></div>
            </div>
          )}
        </div>
      )}

      {/* 결과 목록 */}
      {images.length > 0 && (
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-1">
                {t("results.title")}
              </h2>
              <p className="text-sm text-slate-500">
                {images.length} {t("results.items")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 w-full md:w-auto">
              {hasUnconvertedWebP && (
                <button
                  onClick={convertAllToWebP}
                  disabled={convertingAllWebP}
                  className="flex-1 md:flex-none px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium cursor-pointer transition-all duration-200 text-sm hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                >
                  {convertingAllWebP ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      {t("webp.convertingAll")}
                    </span>
                  ) : (
                    t("webp.convertAll")
                  )}
                </button>
              )}
              <button
                onClick={downloadAll}
                className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white rounded-xl font-medium cursor-pointer transition-all duration-200 text-sm hover:bg-slate-800 hover:shadow-lg active:scale-95"
              >
                {t("results.downloadAll")}
              </button>
              {images.some((img) => img.webpFile) && (
                <button
                  onClick={downloadAllWebP}
                  className="flex-1 md:flex-none px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium cursor-pointer transition-all duration-200 text-sm hover:bg-emerald-700 active:scale-95"
                >
                  {t("webp.downloadAll")}
                </button>
              )}
              <button
                onClick={clearAll}
                className="flex-1 md:flex-none px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium cursor-pointer transition-all duration-200 text-sm hover:bg-slate-50 hover:border-slate-300 active:scale-95"
              >
                {t("results.clearAll")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1"
              >
                {/* 이미지 영역 */}
                <div className="relative w-full pt-[75%] bg-slate-100 overflow-hidden">
                  <img
                    src={image.url}
                    alt={`${t("compressedImage")} ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white text-xl leading-none cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-red-500 hover:scale-110"
                    aria-label={t("removeImage")}
                  >
                    ×
                  </button>
                  {/* 포맷 배지 */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                    {image.format.split("/")[1]?.toUpperCase() || "IMAGE"}
                  </div>
                </div>

                {/* 정보 및 액션 영역 */}
                <div className="p-5">
                  {/* 파일 크기 정보 */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{t("results.original")}</span>
                      <span className="text-slate-700 font-medium">
                        {image.originalSize ? formatFileSize(image.originalSize) : "0 Bytes"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">{t("results.compressed")}</span>
                      <span className="text-slate-900 font-semibold">
                        {image.compressedSize ? formatFileSize(image.compressedSize) : "0 Bytes"}
                      </span>
                    </div>
                    {image.originalSize && image.compressedSize && (
                      <div className="flex items-center justify-between text-sm pt-2 border-t border-slate-100">
                        <span className="text-slate-500">{t("results.reduction")}</span>
                        <span className="text-emerald-600 font-semibold">
                          {compressionRatio(
                            image.originalSize,
                            image.compressedSize
                          )}
                          %
                        </span>
                      </div>
                    )}
                  </div>

                  {/* WebP 변환 섹션 */}
                  {!image.webpFile && !directToWebP && (
                    <div className="mb-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-medium text-slate-900">
                              {t("webp.title")}
                            </p>
                            <div className="relative inline-block">
                              <button
                                type="button"
                                onMouseEnter={() => setShowWebpTooltip(true)}
                                onMouseLeave={() => setShowWebpTooltip(false)}
                                className="w-4 h-4 rounded-full bg-slate-400 text-white text-xs flex items-center justify-center hover:bg-slate-500"
                              >
                                ?
                              </button>
                              {showWebpTooltip && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl z-50">
                                  <p className="font-semibold mb-1">{t("webp.whatIsWebP")}</p>
                                  <p className="text-slate-300 leading-relaxed">
                                    {t("webp.tooltipDescription")}
                                  </p>
                                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500">
                            {t("webp.description")}
                          </p>
                        </div>
                        <button
                          onClick={() => convertImageToWebP(image, index)}
                          disabled={convertingWebP === index}
                          className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg transition-all duration-200 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                        >
                          {convertingWebP === index ? (
                            <span className="flex items-center gap-2">
                              <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              {t("webp.converting")}
                            </span>
                          ) : (
                            t("webp.convert")
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* WebP 변환 완료 섹션 */}
                  {image.webpFile && image.webpSize && (
                    <div className={`mb-4 p-4 rounded-xl border ${
                      image.originalSize && image.webpSize > image.originalSize
                        ? "bg-amber-50 border-amber-200"
                        : "bg-emerald-50 border-emerald-200"
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold text-sm ${
                            image.originalSize && image.webpSize > image.originalSize
                              ? "text-amber-600"
                              : "text-emerald-600"
                          }`}>
                            WebP
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            image.originalSize && image.webpSize > image.originalSize
                              ? "text-amber-600 bg-amber-100"
                              : "text-emerald-600 bg-emerald-100"
                          }`}>
                            {formatFileSize(image.webpSize)}
                          </span>
                        </div>
                        {image.originalSize && image.webpSize > image.originalSize ? (
                          <span className="text-xs text-amber-600 font-medium">
                            {t("webp.larger")}
                          </span>
                        ) : image.compressedSize && image.webpSize && image.compressedSize > image.webpSize ? (
                          <span className="text-xs text-emerald-600 font-medium">
                            {compressionRatio(image.compressedSize, image.webpSize)}% {t("webp.smaller")}
                          </span>
                        ) : image.originalSize && image.webpSize < image.originalSize ? (
                          <span className="text-xs text-emerald-600 font-medium">
                            {compressionRatio(image.originalSize, image.webpSize)}% {t("webp.smaller")}
                          </span>
                        ) : null}
                      </div>
                      <button
                        onClick={() => downloadWebP(image)}
                        className={`w-full py-2.5 text-white text-sm font-medium rounded-lg transition-all duration-200 active:scale-95 ${
                          image.originalSize && image.webpSize > image.originalSize
                            ? "bg-amber-600 hover:bg-amber-700"
                            : "bg-emerald-600 hover:bg-emerald-700"
                        }`}
                      >
                        {t("webp.download")}
                      </button>
                    </div>
                  )}

                  {/* 다운로드 버튼 */}
                  <button
                    onClick={() => downloadImage(image)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium cursor-pointer transition-all duration-200 hover:bg-slate-800 active:scale-95"
                  >
                    {t("results.download")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
