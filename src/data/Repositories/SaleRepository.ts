import { Sales } from "../Entities/Sales";
import { Get } from "../HttpClient/ClientMethods";
import { ISaleRepository } from "../Interfaces/ISaleRepository";

export const SaleRepository:ISaleRepository = {
    GetAllAsync: async function (): Promise<Sales[]> {
        try {
            const res = await Get<Sales[]>("Ventas");
            return res;
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    },
    GetByIdAsync: async function (id: number): Promise<Sales> {
        try{
            const res = await Get<Sales>("Ventas/" + id)
            return res;
        }
        catch(e){
            console.error(e);
            throw e;
        }
    }
}