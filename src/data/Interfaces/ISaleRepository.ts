import { Sales } from "../Entities/Sales";
import { IGetRepository } from "./ICrudRepository";
export interface ISaleRepository extends IGetRepository<Sales>{
    
}