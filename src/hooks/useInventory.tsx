import { Inventory } from "../data/Entities/Inventory"; // Asegúrate de definir el tipo Inventory
import { IInventoryRepository } from "../data/Interfaces/IInventoryRepository"; // Asegúrate de definir esta interfaz
import { InventoryRepository } from "../data/Repositories/InventoryRepository"; // Asegúrate de definir este repositorio
import { useInventoryContext } from "./useInventoryContext"; // Asegúrate de que el contexto esté bien definido

const repo: IInventoryRepository = InventoryRepository;

export const useInventory = () => {
  const { appInventory, setAppInventory } = useInventoryContext(); // Cambia a appInventory

  return {
    appInventory, // Cambia a appInventory
    async getAllAsync() {
      try {
        const handle = await repo.GetAllAsync();
        setAppInventory([...handle]);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async postAsync(newInventory: Inventory) {
      try {
        const handle = await repo.CreateAsync(newInventory);
        setAppInventory((items) => [...items, newInventory]);
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  };
};
