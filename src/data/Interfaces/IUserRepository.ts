import { User } from "../Entities/User";
import { ICrudRepository } from "./ICrudRepository";

export interface IProductRepository extends ICrudRepository<User> {
}