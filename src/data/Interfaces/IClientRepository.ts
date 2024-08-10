import { Client } from '../Entities/Client';
import { ICrudRepository } from "./ICrudRepository";

export interface IClientRepository extends ICrudRepository<Client> {
}