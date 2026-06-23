"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  convertToWebPFile,
  resizeImageFile,
} from "@/lib/browser-image-processing";

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
  const [processingProgress, setProcessingProgress] =
    useState<ProcessingProgress | null>(null);
  const [quality, setQuality] = useState(0.82);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1920);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (!bytes || Number.isNaN(bytes)) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);
    return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
  };

  const compressionRatio = (original: number, compressed: number) => {
    if (!original || !compressed || Number.isNaN(original) || Number.isNaN(compressed)) {
      return 0;
    }
    return Math.max(0, Math.round((1 - compressed / original) * 100));
  };

  const convertToWebPFormat = useCallback(convertToWebPFile, []);

  const compressImage = useCallback(
    async (file: File): Promise<CompressedImage | null> => {
      try {
        if (directToWebP) {
          const resizedFile = await resizeImageFile(file, maxWidth, maxHeight);
          const webpFile = await convertToWebPFormat(resizedFile, quality);
          if (webpFile.size >= resizedFile.size) {
            const url = URL.createObjectURL(resizedFile);
            return {
              file: resizedFile,
              originalFile: file,
              originalSize: file.size,
              compressedSize: resizedFile.size,
              url,
              format: resizedFile.type,
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

        const resizedFile = await resizeImageFile(file, maxWidth, maxHeight);

        if (resizedFile.size < 100 * 1024) {
          const url = URL.createObjectURL(resizedFile);
          return {
            file: resizedFile,
            originalFile: file,
            originalSize: file.size,
            compressedSize: resizedFile.size,
            url,
            format: resizedFile.type,
          };
        }

        const { default: imageCompression } = await import(
          "browser-image-compression"
        );
        const compressedFile = await imageCompression(resizedFile, {
          maxSizeMB: 1,
          maxWidthOrHeight: Math.max(maxWidth, maxHeight),
          useWebWorker: true,
          fileType: resizedFile.type,
          initialQuality: quality,
        });

        const finalFile =
          compressedFile.size >= resizedFile.size ? resizedFile : compressedFile;
        return {
          file: finalFile,
          originalFile: file,
          originalSize: file.size,
          compressedSize: finalFile.size,
          url: URL.createObjectURL(finalFile),
          format: finalFile.type,
        };
      } catch (error) {
        console.error(t("error"), error);
        return null;
      }
    },
    [convertToWebPFormat, directToWebP, maxHeight, maxWidth, quality, t]
  );

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;

      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      if (imageFiles.length === 0) return;

      setIsCompressing(true);
      setProcessingProgress({
        current: 0,
        total: imageFiles.length,
        type: "compressing",
      });

      const compressedImages: CompressedImage[] = [];
      for (let i = 0; i < imageFiles.length; i += 1) {
        setProcessingProgress({
          current: i + 1,
          total: imageFiles.length,
          type: "compressing",
        });

        const compressed = await compressImage(imageFiles[i]);
        if (compressed) compressedImages.push(compressed);
      }

      setImages((prev) => [...prev, ...compressedImages]);
      setIsCompressing(false);
      setProcessingProgress(null);
    },
    [compressImage]
  );

  const convertImageToWebP = useCallback(
    async (image: CompressedImage, index: number) => {
      setConvertingWebP(index);
      try {
        const sourceFile = image.originalFile || image.file;
        const webpFile = await convertToWebPFormat(
          sourceFile,
          quality,
          maxWidth,
          maxHeight
        );
        if (webpFile.size >= sourceFile.size) return;

        const webpUrl = URL.createObjectURL(webpFile);
        setImages((prev) =>
          prev.map((img, i) =>
            i === index ? { ...img, webpFile, webpUrl, webpSize: webpFile.size } : img
          )
        );
      } catch (error) {
        console.error(t("webpConversionError"), error);
      } finally {
        setConvertingWebP(null);
      }
    },
    [convertToWebPFormat, maxHeight, maxWidth, quality, t]
  );

  const convertAllToWebP = useCallback(async () => {
    const targets = images.filter((image) => !image.webpFile);
    if (targets.length === 0) return;

    setConvertingAllWebP(true);
    setProcessingProgress({ current: 0, total: targets.length, type: "converting" });

    for (let i = 0; i < targets.length; i += 1) {
      const imageIndex = images.findIndex((image) => image === targets[i]);
      setProcessingProgress({
        current: i + 1,
        total: targets.length,
        type: "converting",
      });

      try {
        const sourceFile = targets[i].originalFile || targets[i].file;
        const webpFile = await convertToWebPFormat(
          sourceFile,
          quality,
          maxWidth,
          maxHeight
        );
        if (webpFile.size >= sourceFile.size) continue;

        const webpUrl = URL.createObjectURL(webpFile);
        setImages((prev) =>
          prev.map((img, idx) =>
            idx === imageIndex
              ? { ...img, webpFile, webpUrl, webpSize: webpFile.size }
              : img
          )
        );
      } catch (error) {
        console.error(t("webpConversionError"), error);
      }
    }

    setConvertingAllWebP(false);
    setProcessingProgress(null);
  }, [convertToWebPFormat, images, maxHeight, maxWidth, quality, t]);

  const downloadFile = useCallback((url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const clearAll = useCallback(() => {
    images.forEach((image) => {
      URL.revokeObjectURL(image.url);
      if (image.webpUrl) URL.revokeObjectURL(image.webpUrl);
    });
    setImages([]);
  }, [images]);

  const removeImage = useCallback(
    (index: number) => {
      const image = images[index];
      URL.revokeObjectURL(image.url);
      if (image.webpUrl) URL.revokeObjectURL(image.webpUrl);
      setImages((prev) => prev.filter((_, i) => i !== index));
    },
    [images]
  );

  const hasUnconvertedWebP = images.some((image) => !image.webpFile);
  const progressPercent = processingProgress
    ? Math.round((processingProgress.current / processingProgress.total) * 100)
    : 0;

  return (
    <section className="xp-panel h-full" aria-label={t("ariaLabel")}>
      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <aside className="xp-sidebar">
          <div className="xp-sidebar-title">{t("settings.title")}</div>

          <label className="xp-field">
            <span>{t("quality")}</span>
            <strong>{Math.round(quality * 100)}{t("percent")}</strong>
            <input
              type="range"
              min="0.4"
              max="1"
              step="0.05"
              value={quality}
              onChange={(event) => setQuality(Number(event.target.value))}
            />
          </label>

          <label className="xp-field">
            <span>{t("maxWidth")}</span>
            <input
              type="number"
              min="320"
              max="6000"
              value={maxWidth}
              onChange={(event) => setMaxWidth(Number(event.target.value))}
            />
          </label>

          <label className="xp-field">
            <span>{t("maxHeight")}</span>
            <input
              type="number"
              min="320"
              max="6000"
              value={maxHeight}
              onChange={(event) => setMaxHeight(Number(event.target.value))}
            />
          </label>

          <label className="xp-checkbox">
            <input
              type="checkbox"
              checked={directToWebP}
              disabled={images.length > 0}
              onChange={(event) => setDirectToWebP(event.target.checked)}
            />
            <span>
              <b>{t("directToWebP.title")}</b>
              <small>{t("directToWebP.description")}</small>
            </span>
          </label>
        </aside>

        <div className="min-w-0">
          <div
            className="xp-dropzone"
            onDrop={(event) => {
              event.preventDefault();
              handleFiles(event.dataTransfer.files);
            }}
            onDragOver={(event) => event.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(event) => handleFiles(event.target.files)}
              className="hidden"
            />
            <div className="xp-drop-icon">IMG</div>
            <div>
              <p>{t("dropZone.title")}</p>
              <span>{t("dropZone.subtitle")}</span>
            </div>
          </div>

          {(isCompressing || convertingAllWebP || processingProgress) && (
            <div className="xp-progress">
              <div className="flex items-center justify-between">
                <span>
                  {processingProgress?.type === "converting"
                    ? t("webp.convertingAll")
                    : t("compressing")}
                </span>
                <span>
                  {processingProgress?.current} / {processingProgress?.total}
                </span>
              </div>
              <div className="xp-progress-track">
                <div style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-4">
              <div className="xp-toolbar">
                <div>
                  <strong>{t("results.title")}</strong>
                  <span>{images.length} {t("results.items")}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hasUnconvertedWebP && (
                    <button
                      className="xp-button"
                      onClick={convertAllToWebP}
                      disabled={convertingAllWebP}
                    >
                      {convertingAllWebP ? t("webp.converting") : t("webp.convertAll")}
                    </button>
                  )}
                  <button
                    className="xp-button"
                    onClick={() =>
                      images.forEach((image, index) =>
                        setTimeout(() => downloadFile(image.url, image.file.name), index * 120)
                      )
                    }
                  >
                    {t("results.downloadAll")}
                  </button>
                  {images.some((image) => image.webpFile) && (
                    <button
                      className="xp-button"
                      onClick={() =>
                        images.forEach((image, index) => {
                          if (image.webpFile && image.webpUrl) {
                            setTimeout(
                              () => downloadFile(image.webpUrl!, image.webpFile!.name),
                              index * 120
                            );
                          }
                        })
                      }
                    >
                      {t("webp.downloadAll")}
                    </button>
                  )}
                  <button className="xp-button danger" onClick={clearAll}>
                    {t("results.clearAll")}
                  </button>
                </div>
              </div>

              <div className="xp-result-grid">
                {images.map((image, index) => (
                  <article className="xp-file-card" key={`${image.file.name}-${index}`}>
                    <div className="xp-file-preview">
                      {/* Blob previews come from local object URLs, so Next image optimization cannot help here. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image.url}
                        alt={`${t("compressedImage")} ${index + 1}`}
                      />
                      <button
                        aria-label={t("removeImage")}
                        onClick={() => removeImage(index)}
                      >
                        x
                      </button>
                    </div>
                    <div className="xp-file-body">
                      <strong>{image.file.name}</strong>
                      <dl>
                        <div>
                          <dt>{t("results.original")}</dt>
                          <dd>{formatFileSize(image.originalSize)}</dd>
                        </div>
                        <div>
                          <dt>{t("results.compressed")}</dt>
                          <dd>{formatFileSize(image.compressedSize)}</dd>
                        </div>
                        <div>
                          <dt>{t("results.reduction")}</dt>
                          <dd>{compressionRatio(image.originalSize, image.compressedSize)}%</dd>
                        </div>
                      </dl>

                      {!image.webpFile && !directToWebP && (
                        <button
                          className="xp-button w-full"
                          onClick={() => convertImageToWebP(image, index)}
                          disabled={convertingWebP === index}
                        >
                          {convertingWebP === index
                            ? t("webp.converting")
                            : t("webp.convert")}
                        </button>
                      )}

                      {image.webpFile && image.webpUrl && image.webpSize && (
                        <button
                          className="xp-button w-full"
                          onClick={() => downloadFile(image.webpUrl!, image.webpFile!.name)}
                        >
                          {t("webp.download")} ({formatFileSize(image.webpSize)})
                        </button>
                      )}

                      <button
                        className="xp-button primary w-full"
                        onClick={() => downloadFile(image.url, image.file.name)}
                      >
                        {t("results.download")}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
