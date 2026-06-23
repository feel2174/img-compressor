export async function convertToWebPFile(
  file: File,
  quality: number,
  maxWidth?: number,
  maxHeight?: number
): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();

      image.onload = () => {
        const scale = Math.min(
          1,
          maxWidth ? maxWidth / image.width : 1,
          maxHeight ? maxHeight / image.height : 1
        );
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas context not available"));
          return;
        }

        context.drawImage(image, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to convert to WebP"));
              return;
            }

            resolve(
              new File([blob], `${file.name.replace(/\.[^/.]+$/, "")}.webp`, {
                type: "image/webp",
                lastModified: Date.now(),
              })
            );
          },
          "image/webp",
          quality
        );
      };

      image.onerror = () => reject(new Error("Failed to load image"));
      image.src = event.target?.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export async function resizeImageFile(
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();

      image.onload = () => {
        const scale = Math.min(1, maxWidth / image.width, maxHeight / image.height);

        if (scale === 1) {
          resolve(file);
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Canvas context not available"));
          return;
        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Failed to resize image"));
              return;
            }

            resolve(
              new File([blob], file.name, {
                type: outputType,
                lastModified: Date.now(),
              })
            );
          },
          outputType,
          0.92
        );
      };

      image.onerror = () => reject(new Error("Failed to load image"));
      image.src = event.target?.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
