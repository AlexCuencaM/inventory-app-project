import { ClientDTO } from "../DTOs/ClientDTO";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { Client } from "../Entities/Client";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { IClientRepository } from "../Interfaces/IClientRepository";

export const ClientRepository: IClientRepository = {
    CreateAsync: async function (client: Client): Promise<MessageInfoDTO> {
        try{
            const res = await Post<MessageInfoDTO>("Cliente/crear", client as ClientDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
        try{
            const res = await Delete<MessageInfoDTO>("Cliente/", id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetAllAsync: async function (): Promise<Client[]> {
        try{
            const res = await Get<Client[]>("Cliente")
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByIdAsync: async function (id: number): Promise<Client> {
        try{
            const res = await Get<Client>("Cliente/" + id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByCriteria: async function (dni: string): Promise<Client> {
        try{
            const res = await Get<Client>("Cliente/identificacion/" + dni)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    UpdateAsync: async function (client: Client): Promise<MessageInfoDTO> {
        try{
            const res = await Put<MessageInfoDTO>("Cliente/modificar", client as ClientDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}