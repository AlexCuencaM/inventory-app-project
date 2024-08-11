import { ISaleRepository } from "../data/Interfaces/ISaleRepository"
import { SaleRepository } from "../data/Repositories/SaleRepository"
import { useInventoryContext } from "./useInventoryContext";

const repo: ISaleRepository = SaleRepository;
export const useSales = () => {
  const { sales, setSales, sale, setSale} = useInventoryContext();
  return {
    sales,
    sale,
    async getAllAsync(){
        try{
            const handle = await repo.GetAllAsync();
            setSales([...handle])
        }
        catch(e){
            console.error(e)
            throw e;
        }
    },
    async getAsync(id:number){
        try{
            const handle = await repo.GetByIdAsync(id);
            setSale(handle)
            return handle;
        }
        catch(e){
            console.error(e)
            throw e;
        }
    }

  }
}
