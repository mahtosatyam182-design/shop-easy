// Helper function to generate placeholder image URLs with product names
export const getPlaceholderImage = (productName) => {
  const text = encodeURIComponent(productName);
  // Using placeholder.com service
  return `https://placehold.co/300x300/4a90a4/ffffff?text=${text}&font=roboto`;
};
