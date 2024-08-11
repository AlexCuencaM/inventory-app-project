import { Inventory } from "../Entities/Inventory";
import { ICrudRepository } from "./ICrudRepository";

export interface IInventoryRepository extends ICrudRepository<Inventory> {}
