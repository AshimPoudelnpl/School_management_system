export const getGalleryPhotos = (imageUrl = "") =>
  imageUrl
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => `${import.meta.env.VITE_IMG_URL}${url}`);

export const formatGalleryDate = (value) => {
  if (!value) return "Recently added";

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "Recently added";

  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const buildGalleryAlbum = (gallery, categories = []) => {
  const photos = getGalleryPhotos(gallery?.image_url);
  const categoryName =
    categories.find((category) => category.id === gallery?.category_id)?.category_name || "Gallery";
  const title = gallery?.caption?.trim() || "Western School Album";

  return {
    ...gallery,
    title,
    caption: title,
    category: categoryName,
    photos,
    coverPhoto: photos[0] || "",
    photoCount: photos.length,
    createdLabel: formatGalleryDate(gallery?.created_at),
  };
};
