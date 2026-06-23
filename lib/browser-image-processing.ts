export async function convertToWebPFile(
  file: File,
  quality: number
): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();

      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;

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
