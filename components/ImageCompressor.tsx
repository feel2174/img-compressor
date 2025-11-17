"use client";

import { useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import imageCompression from "browser-image-compression";

interface CompressedImage {
  file: File;
  originalSize: number;
  compressedSize: number;
  url: string;
}

export default function ImageCompressor() {
  const t = useTranslations("compressor");
  const [images, setImages] = useState<CompressedImage[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [quality, setQuality] = useState(0.8);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1920);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const compressImage = useCallback(
    async (file: File): Promise<CompressedImage | null> => {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: Math.max(maxWidth, maxHeight),
          useWebWorker: true,
          fileType: file.type,
          initialQuality: quality,
        };

        const compressedFile = await imageCompression(file, options);
        const url = URL.createObjectURL(compressedFile);

        return {
          file: compressedFile,
          originalSize: file.size,
          compressedSize: compressedFile.size,
          url,
        };
      } catch (error) {
        console.error(t("error"), error);
        return null;
      }
    },
    [quality, maxWidth, maxHeight]
  );

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      setIsCompressing(true);
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      const compressedImages: CompressedImage[] = [];

      for (const file of imageFiles) {
        const compressed = await compressImage(file);
        if (compressed) {
          compressedImages.push(compressed);
        }
      }

      setImages((prev) => [...prev, ...compressedImages]);
      setIsCompressing(false);
    },
    [compressImage]
  );

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
    images.forEach((image) => URL.revokeObjectURL(image.url));
    setImages([]);
  }, [images]);

  const removeImage = useCallback(
    (index: number) => {
      const image = images[index];
      URL.revokeObjectURL(image.url);
      setImages((prev) => prev.filter((_, i) => i !== index));
    },
    [images]
  );

  const compressionRatio = (original: number, compressed: number): number => {
    return Math.round((1 - compressed / original) * 100);
  };

  return (
    <div className="w-full">
      {/* 설정 패널 */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-xl">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-800 text-sm">
            품질: {Math.round(quality * 100)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-indigo-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-800 text-sm">
            최대 너비: {maxWidth}px
          </label>
          <input
            type="range"
            min="400"
            max="4000"
            step="100"
            value={maxWidth}
            onChange={(e) => setMaxWidth(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-indigo-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-800 text-sm">
            최대 높이: {maxHeight}px
          </label>
          <input
            type="range"
            min="400"
            max="4000"
            step="100"
            value={maxHeight}
            onChange={(e) => setMaxHeight(parseInt(e.target.value))}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-indigo-600"
          />
        </div>
      </div> */}

      {/* 드롭 존 */}
      <div
        ref={dropZoneRef}
        className="border-2 border-dashed border-gray-300 rounded-xl py-16 px-8 text-center cursor-pointer transition-all duration-300 bg-gray-50 mb-8 hover:border-indigo-500 hover:bg-indigo-50"
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
          <div className="text-6xl mb-4">📁</div>
          <p className="text-xl font-semibold text-gray-800 mb-2">
            {t("dropZone.title")}
          </p>
          <p className="text-sm text-gray-600">{t("dropZone.subtitle")}</p>
        </div>
      </div>

      {/* 압축 중 표시 */}
      {isCompressing && (
        <div className="text-center py-8 text-indigo-600 font-semibold">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p>{t("compressing")}</p>
        </div>
      )}

      {/* 결과 목록 */}
      {images.length > 0 && (
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-2xl text-gray-800">
              {t("results.title")} ({images.length})
            </h2>
            <div className="flex gap-2 w-full md:w-auto">
              <button
                onClick={downloadAll}
                className="flex-1 md:flex-none px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold cursor-pointer transition-all duration-300 text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40"
              >
                {t("results.downloadAll")}
              </button>
              <button
                onClick={clearAll}
                className="flex-1 md:flex-none px-5 py-2.5 bg-gray-100 text-gray-800 rounded-lg font-semibold cursor-pointer transition-all duration-300 text-sm hover:bg-gray-200"
              >
                {t("results.clearAll")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative w-full pt-[75%] bg-gray-100 overflow-hidden">
                  <img
                    src={image.url}
                    alt={`${t("compressedImage")} ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full border-none bg-black/60 text-white text-2xl leading-none cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-red-600/80 hover:scale-110"
                    aria-label={t("removeImage")}
                  >
                    ×
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex flex-col gap-1 mb-3 text-sm">
                    <span className="text-gray-600">
                      {t("results.original")}:{" "}
                      {formatFileSize(image.originalSize)}
                    </span>
                    <span className="text-indigo-600 font-semibold">
                      {t("results.compressed")}:{" "}
                      {formatFileSize(image.compressedSize)}
                    </span>
                    <span className="text-green-600 font-semibold">
                      {compressionRatio(
                        image.originalSize,
                        image.compressedSize
                      )}
                      % {t("results.reduced")}
                    </span>
                  </div>
                  <button
                    onClick={() => downloadImage(image)}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40"
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
