import { User } from "../Entities/User";
import { ICrudRepository } from "./ICrudRepository";

export interface IUserRepository extends ICrudRepository<User> {
}