import { categories } from '../data/categories';
import { ProductResolvers } from '../graphql/generated';

export const Product: ProductResolvers = {
  category: (parent) => {
    const category = categories.find((c) => c.id === parent.categoryId);
    if (!category) return null;
    return category;
  },
};
