export const Query = {
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      } else {
        filteredProducts = filteredProducts.filter(
          (product) => !product.onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let totalRating = 0;
          let numberofReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              totalRating += review.rating;
              numberofReviews++;
            }
          });
          const avgProductRating = totalRating / numberofReviews;
          return avgProductRating === avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, { id }, { products }) =>
    products.find((product) => product.id === id),

  categories: (parent, args, { categories }) => categories,

  category: (parent, { id }, { categories }) =>
    categories.find((category) => category.id === id),
};
