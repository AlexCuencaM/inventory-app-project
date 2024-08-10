import { ClientDTO } from "../DTOs/ClientDTO";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { Client } from "../Entities/Client";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { IClientRepository } from "../Interfaces/IClientRepository";

export const ClientRepository: IClientRepository = {
    CreateClientAsync: async function (client: Client): Promise<MessageInfoDTO> {
        try{
            const res = await Post<MessageInfoDTO>("Cliente/Crear", client as ClientDTO);
            return res;
        }
        catch(e){
            console.error(e);
        }
    },
    DeleteClientAsync: function (id: number): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    },
    GetAllAsync: function (): Promise<Client[]> {
        throw new Error("Function not implemented.");
    },
    GetByIdAsync: function (id: number): Promise<Client> {
        throw new Error("Function not implemented.");
    },
    GetByDNI: function (dni: string): Promise<Client> {
        throw new Error("Function not implemented.");
    },
    UpdateClientAsync: function (client: Client): Promise<MessageInfoDTO> {
        throw new Error("Function not implemented.");
    }
}