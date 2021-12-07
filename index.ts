import fs from 'fs';
import { ApolloServer } from 'apollo-server';
import { Resolvers } from './graphql/generated';
import { Query } from './resolvers/Query';
import { Category } from './resolvers/Category';
import { Product } from './resolvers/Product';

const typeDefs = fs.readFileSync('./graphql/schema.graphql', { encoding: 'utf8' });

const resolvers: Resolvers = {
  Query,
  Category,
  Product,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server is ready at: ${url}`);
});
