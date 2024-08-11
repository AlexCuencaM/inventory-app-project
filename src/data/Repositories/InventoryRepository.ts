import { InventoryDTO } from "../DTOs/InventoryDTO";
import { Inventory } from "../Entities/Inventory";
import { IInventoryRepository } from "../Interfaces/IInventoryRepository";
import { Post, Get, Delete, Put } from "../HttpClient/ClientMethods";
import { MessageInfoDTO } from "../DTOs/MessageInfoDTO";

export const InventoryRepository: IInventoryRepository = {
  CreateAsync: async function (inventory: Inventory): Promise<MessageInfoDTO> {
    try {
      const res = await Post<MessageInfoDTO>(
        "MovimientoInventario/crear",
        inventory as InventoryDTO
      );
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  DeleteAsync: async function (id: number): Promise<MessageInfoDTO> {
    throw new Error("Method not implemented.");
  },
  GetAllAsync: async function (): Promise<Inventory[]> {
    try {
      const res = await Get<Inventory[]>("MovimientoInventario");
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  GetByIdAsync: async function (id: number): Promise<Inventory> {
    throw new Error("Method not implemented.");
  },
  GetByCriteria: async function (criteria: string): Promise<Inventory> {
    throw new Error("Method not implemented.");
  },
  UpdateAsync: async function (inventory: Inventory): Promise<MessageInfoDTO> {
    throw new Error("Method not implemented.");
  },
};
