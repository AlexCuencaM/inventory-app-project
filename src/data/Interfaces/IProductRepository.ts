import { Product } from "../Entities/Product";
import { ICrudRepository } from "./ICrudRepository";

export interface IProductRepository extends ICrudRepository<Product> {
}