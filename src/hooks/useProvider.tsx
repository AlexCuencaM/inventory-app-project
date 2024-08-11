import { Provider } from "../data/Entities/Provider";
import { IProviderRepository } from "../data/Interfaces/IProviderRepository";
import { ProviderRepository } from "../data/Repositories/ProviderRepository";
import { useInventoryContext } from "./useInventoryContext";

const repo: IProviderRepository = ProviderRepository;
export const useProvider = () => {
  const { appProviders, setAppProviders } = useInventoryContext();

  return {
    appProviders,
    async getAllAsync() {
      try {
        const handle = await repo.GetAllAsync();
        setAppProviders([...handle]);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async putAsync(newProvider: Provider) {
      try {
        const handle = await repo.UpdateAsync(newProvider);
        setAppProviders((formy) =>
          formy.map((u) => {
            if (newProvider.id === u.id) {
              return {
                ...newProvider,
              };
            }
            return u;
          })
        );
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async postAsync(newProvider: Provider) {
      try {
        const handle = await repo.CreateAsync(newProvider);
        setAppProviders((formy) => [...formy, newProvider]);
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async deleteAsync(id: number) {
      try {
        const handle = await repo.DeleteAsync(id);
        setAppProviders((formy) => formy.filter((u) => u.id !== id));
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
