cd server/

npm install

# Querying for categories
query{
  categories {
    id
    name
  }
}

# Querying for products with its reviews
query{
  products {
    id
    description
    image
    name
    onSale
    price
    quantity
    reviews {
      title
      comment
      rating

    }
  }
}
.... and many more queries

# Mutations
## Adding Categories

mutation($input: AddCategoryInput!){
  addCategory(input: $input) {
    id
    name
  }
}

## Adding products

mutation($input: AddProductInput!){
  addProduct(input:$input
 
   ) {
    id
    name
  
  }
}
Information

{
  "input": {
    "name": "Cooking-Pot",
    "description": "A stainless pot",
    "image": "Img-01",
    "onSale": true,
    "price": 20.04,
    "quantity": 5, 
    "categoryId": "c01b1ff4-f894-4ef2-b27a-22aacc2fca70"
  }
} y




