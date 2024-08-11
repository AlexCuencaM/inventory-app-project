import { Provider } from "../Entities/Provider";
import { IProviderRepository } from "../Interfaces/IProviderRepository";
import { ProviderDTO } from "../DTOs/ProviderDTO";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";

export const ProviderRepository: IProviderRepository = {
  CreateAsync: async function (provider: Provider): Promise<MessageInfoDTO> {
    try {
      const res = await Post<MessageInfoDTO>(
        "Proveedor/crear",
        provider as ProviderDTO
      );
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
    try {
      const res = await Delete<MessageInfoDTO>("Proveedor/", id);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  GetAllAsync: async function (): Promise<Provider[]> {
    try {
      const res = await Get<Provider[]>("Proveedor");
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  GetByIdAsync: async function (id: number): Promise<Provider> {
    try {
      const res = await Get<Provider>("Proveedor/" + id);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  GetByCriteria: async function (name: string): Promise<Provider> {
    try {
      const res = await Get<Provider>("Proveedor/consultaPorNombre/" + name);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  UpdateAsync: async function (provider: Provider): Promise<MessageInfoDTO> {
    try {
      const res = await Put<MessageInfoDTO>(
        "Proveedor/modificar",
        provider as ProviderDTO
      );
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
