import { Laboratory } from "../data/Entities/Laboratory";
import { ILaboratoryRepository } from "../data/Interfaces/ILaboratoryRepository";
import { LaboratoryRepository } from "../data/Repositories/LaboratoryRepository";
import { useInventoryContext } from "./useInventoryContext";

const repo: ILaboratoryRepository = LaboratoryRepository;
export const useLaboratory = () => {
  const { appLaboratories, setAppLaboratories } = useInventoryContext();

  return {
    appLaboratories,
    async getAllAsync() {
      try {
        const handle = await repo.GetAllAsync();
        setAppLaboratories([...handle]);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async putAsync(newLaboratory: Laboratory) {
      try {
        const handle = await repo.UpdateAsync(newLaboratory);
        setAppLaboratories((formy) =>
          formy.map((u) => {
            if (newLaboratory.id === u.id) {
              return {
                ...newLaboratory,
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
    async postAsync(newLaboratory: Laboratory) {
      try {
        const handle = await repo.CreateAsync(newLaboratory);
        setAppLaboratories((formy) => [...formy, newLaboratory]);
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async deleteAsync(id: number) {
      try {
        const handle = await repo.DeleteAsync(id);
        setAppLaboratories((formy) => formy.filter((u) => u.id !== id));
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
