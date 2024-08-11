import { IUserRepository } from "../data/Interfaces/IUserRepository";
import { UserRepository } from "../data/Repositories/UserRepository";
import { useInventoryContext } from "./useInventoryContext";
const repo: IUserRepository = UserRepository;
export const useUser = () => {
    const { setAppUsers } = useInventoryContext();
    return {
        async getAllAsync(){
            try{
                const handle = await repo.GetAllAsync();
                setAppUsers([...handle])
                return handle;
            }
            catch(e){
                console.error(e)
                throw e;
            }
        }
    }
}