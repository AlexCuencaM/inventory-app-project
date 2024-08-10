import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { Client } from '../Entities/Client';

export interface IClientRepository {
    CreateClientAsync(client: Client): Promise<MessageInfoDTO>;
    DeleteClientAsync(id: number): Promise<MessageInfoDTO>;
    GetAllAsync(): Promise<Client[]>;
    GetByIdAsync(id:number): Promise<Client>;
    GetByDNI(dni:string): Promise<Client>;
    UpdateClientAsync(client: Client): Promise<MessageInfoDTO>;
}