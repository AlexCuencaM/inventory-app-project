import { LaboratoryDTO } from "../DTOs/LaboratoryDTO";
import { Laboratory } from "../Entities/Laboratory";
import { ILaboratoryRepository } from "../Interfaces/ILaboratoryRepository";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";

export const LaboratoryRepository: ILaboratoryRepository = {
    CreateAsync: async function (laboratory: Laboratory): Promise<MessageInfoDTO> {
        try{
            const res = await Post<MessageInfoDTO>("Laboratorio/crear", laboratory as LaboratoryDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
        try{
            const res = await Delete<MessageInfoDTO>("Laboratorio/", id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetAllAsync: async function (): Promise<Laboratory[]> {
        try{
            const res = await Get<Laboratory[]>("Laboratorio")
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByIdAsync: async function (id: number): Promise<Laboratory> {
        try{
            const res = await Get<Laboratory>("Laboratorio/" + id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByCriteria: async function (name: string): Promise<Laboratory> {
        try{
            const res = await Get<Laboratory>("Laboratorio/consultaPorNombre/" + name)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    UpdateAsync: async function (laboratory: Laboratory): Promise<MessageInfoDTO> {
        try{
            const res = await Put<MessageInfoDTO>("Laboratorio/modificar", laboratory as LaboratoryDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}