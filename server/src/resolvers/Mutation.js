import { v4 as uuidv4, v4 } from "uuid";

export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const { name } = input;
    const newCategory = {
      id: uuidv4(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, description, price, quantity, categoryId, onSale } = input;
    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price,
      quantity,
      categoryId,
      onSale,
    };
    products.push(newProduct);
    return newProduct;
  },
  addReviews: (parent, { input }, { reviews }) => {
    const { title, comment, rating, date, productId } = input;
    const newReview = {
      title,
      comment,
      rating,
      date,
      productId,
    };
    reviews.push(newReview);
    return newReview;
  },
};
