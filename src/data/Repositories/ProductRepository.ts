import { IProductRepository } from "../Interfaces/IProductRepository";
import { Product } from "../Entities/Product";
import { ProductDTO } from "../DTOs/ProductDTO";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";

export const ProductRepository: IProductRepository = {
    CreateAsync: async function (product: Product): Promise<MessageInfoDTO> {
        try{
            const res = await Post<MessageInfoDTO>("Producto/crear", product as ProductDTO);
            console.log(res);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
        try{
            const res = await Delete<MessageInfoDTO>("Producto/", id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetAllAsync: async function (): Promise<Product[]> {
        try{
            const res = await Get<Product[]>("Producto")
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByIdAsync: async function (id: number): Promise<Product> {
        try{
            const res = await Get<Product>("Producto/" + id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    GetByCriteria: async function (name: string): Promise<Product> {
        try{
            const res = await Get<Product>("Producto/consultaPorNombre/" + name)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    },
    UpdateAsync: async function (product: Product): Promise<MessageInfoDTO> {
        try{
            const res = await Put<MessageInfoDTO>("Producto/modificar", product as ProductDTO);
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}