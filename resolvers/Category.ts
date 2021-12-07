import { products } from '../data/products';
import { CategoryResolvers } from '../graphql/generated';

export const Category: CategoryResolvers = {
  products: (parent) => {
    const categories = products.filter((p) => p.categoryId === parent.id);
    return categories;
  },
};
