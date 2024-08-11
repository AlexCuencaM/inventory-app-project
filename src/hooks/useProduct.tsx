import { Product } from "../data/Entities/Product";
import { IProductRepository } from "../data/Interfaces/IProductRepository";
import { ProductRepository } from "../data/Repositories/ProductRepository";
import { useInventoryContext } from "./useInventoryContext";

const repo: IProductRepository = ProductRepository;
export const useProduct = () => {
  const { appProducts, setAppProducts } = useInventoryContext();

  return {
    appProducts,
    async getAllAsync() {
      try {
        const handle = await repo.GetAllAsync();
        setAppProducts([...handle]);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async putAsync(newProduct: Product) {
      try {
        const handle = await repo.UpdateAsync(newProduct);
        setAppProducts((formy) =>
          formy.map((u) => {
            if (newProduct.id === u.id) {
              return {
                ...newProduct,
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
    async postAsync(newProduct: Product) {
      try {
        const handle = await repo.CreateAsync(newProduct);
        setAppProducts((formy) => [...formy, newProduct]);
        return handle.message;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async deleteAsync(id: number) {
      try {
        const handle = await repo.DeleteAsync(id);
        setAppProducts((formy) => formy.filter((u) => u.id !== id));
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
