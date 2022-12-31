export const Category = {
  //parent id -- to find the product associated with the category
  products: ({ id }, { filter }, { products }) => {
    const categoryProducts = products.filter(
      (product) => product.categoryId === id
    );
    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
//parent.id is the id called can also be parent.name
// category(id:ID){
// id-- parents.id
// name
// products{
// id
// name
// }
// }
//product.categoryId-- id in the products
