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
    const { name, description, price, image, quantity, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuidv4(),
      name,
      image,
      description,
      price,
      quantity,
      onSale,
      categoryId,
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
  deleteCategory: (parent, { id }, { categories, products }) => {
    categories = categories.filter((category) => category.id !== id);
    products = products.map((product) => {
      if (product.categoryId === id) return { ...product, categoryId: null };
      return product;
    });
    return true;
  },
  deleteProduct: (parent, { id }, { products, reviews }) => {
    products = products.filter((product) => product.id !== id);
    reviews = reviews.filter((review) => review.productId !== id);
    return true;
  },
  deleteReview: (parent, { id }, { reviews }) => {
    reviews = reviews.filter((review) => review.id !== id);
    return true;
  },
  updateCategory: (parent, { id, input }, { categories }) => {
    const index = categories.findIndex((category) => category.id === id);
    if (index === -1) return null;
    categories[index] = {
      ...categories[index],
      ...input,
    };
    return categories[index];
  },
};
