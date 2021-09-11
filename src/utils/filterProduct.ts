import { Dict } from "../types";

/**
 * for a given filters key/value object, generates a callback function
 * @param filters
 * @returns (item: Dict) => boolean
 */
const filterProduct =
  (filters: Dict) =>
  (product: Dict): boolean => {
    // implement filter by `price` and `quantity`
    // make filter by `name` a case-insensitive V
    return (
      (!filters.name ||
        product.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.price || product.price >= filters.price) &&
      (!filters.quantity || product.quantity >= filters.quantity)
    );
  };

export default filterProduct;
