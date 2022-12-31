export const Product = {
  category: ({ categoryId }, args, { categories }) =>
    categories.find((category) => category.id === categoryId),

  reviews: ({ id }, args, { reviews }) =>
    reviews.filter((review) => review.productId === id),
};
