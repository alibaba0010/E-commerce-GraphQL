export const Query = {
  products: (parent, { filter }, { products }) => {
    let filteredProducts = products;

    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      } else {
        filteredProducts = filteredProducts.filter(
          (product) => !product.onSale
        );
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
