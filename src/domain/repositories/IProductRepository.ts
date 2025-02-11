import { Product } from "../entities/Product/Product.entitie";

export interface IProductRepository{
  findById(id: string): Promise<Product | null>;
  save(product: Product): Promise<void>;
}
