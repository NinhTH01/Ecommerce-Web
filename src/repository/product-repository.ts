import { Product } from "../model/Product";

export class ProductRepository {
  public product = async (): Promise<Product[]> => {
    const response = await fetch("https://fakestoreapi.com/products");

    const result = await response.json();

    return result as Product[];
  };

  public category = async (): Promise<string[]> => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );

    const result = await response.json();

    return result as string[];
  };
}

export const productRepository: ProductRepository = new ProductRepository();
