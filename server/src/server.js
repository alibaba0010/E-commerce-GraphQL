import { ApolloServer } from "apollo-server";
import { Query } from "./resolvers/Query.js";
import { Product } from "./resolvers/Product.js";
import { Category } from "./resolvers/Category.js";
import { typeDefs } from "./schema.js";
import { Mutation } from "./resolvers/Mutation.js";
import { categories, products, reviews } from "./db.js";

const PORT = 3030;
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category, Mutation },
  context: { categories, products, reviews },
});

async function startServer() {
  await server.listen(PORT, () =>
    console.log(` 🚀 Server listening on port http://localhost:${PORT} 🚀 `)
  );
}

startServer();
