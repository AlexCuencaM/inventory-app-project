import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";
import { IUserRepository } from "../Interfaces/IUserRepository";
import { User } from "../Entities/User";
import { UserDTO } from "../DTOs/UserDTO";

export const UserRepository: IUserRepository = {
    CreateAsync: async function (user: User): Promise<MessageInfoDTO> {
        try{
            const res = await Post<MessageInfoDTO>("User/crear", user as UserDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
        try{
            const res = await Delete<MessageInfoDTO>("User/", id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetAllAsync: async function (): Promise<User[]> {
        try{
            const res = await Get<User[]>("User")
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByIdAsync: async function (id: number): Promise<User> {
        try{
            const res = await Get<User>("User/" + id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByCriteria: async function (name: string): Promise<User> {
        try{
            const res = await Get<User>("User/consultaPorNombre/" + name)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    UpdateAsync: async function (user: User): Promise<MessageInfoDTO> {
        try{
            const res = await Put<MessageInfoDTO>("User/modificar", user as UserDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}