import { Client } from "../data/Entities/Client";
import { IClientRepository } from "../data/Interfaces/IClientRepository";
import { ClientRepository } from "../data/Repositories/ClientRepository";
import { useInventoryContext } from "./useInventoryContext";

const repo: IClientRepository = ClientRepository;

export const useClient = () => {
  const { appClients, setAppClients } = useInventoryContext(); // Cambia a appClients

  return {
    appClients, // Cambia a appClients
    async getAllAsync() {
      try {
        const handle = await repo.GetAllAsync();
        setAppClients([...handle]); // Cambia a setAppClients
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async putAsync(updatedClient: Client) {
      try {
        const handle = await repo.UpdateAsync(updatedClient);
        setAppClients((clients) =>
          clients.map((c) => {
            if (updatedClient.id === c.id) {
              return {
                ...updatedClient,
              };
            }
            return c;
          })
        );
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async postAsync(newClient: Client) {
      try {
        const handle = await repo.CreateAsync(newClient);
        setAppClients((clients) => [...clients, newClient]);
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async deleteAsync(id: number) {
      try {
        const handle = await repo.DeleteAsync(id);
        setAppClients((clients) => clients.filter((c) => c.id !== id));
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async getAsync(id: number) {
      try {
        const handle = await repo.GetByIdAsync(id);
        return handle;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  };
};
