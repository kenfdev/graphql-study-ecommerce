import { products } from '../data/products';
import { categories } from '../data/categories';
import { QueryResolvers } from '../graphql/generated';

export const Query: QueryResolvers = {
  hello: () => {
    return 'World!';
  },
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const product = products.find((p) => p.id === args.id);

    if (!product) return null;
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const category = categories.find((c) => c.id === args.id);

    if (!category) return null;
    return category;
  },
};
