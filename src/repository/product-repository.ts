import { Product } from "../model/Product"

export class ProductRepository {
    public product = async (): Promise<Product[]> => {
        const response = await fetch('https://fakestoreapi.com/products');

        const result = await response.json();

        return result as Product[];
    }
}

export const productRepository: ProductRepository = new ProductRepository();