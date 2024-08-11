import { User } from "../data/Entities/User";
import { IUserRepository } from "../data/Interfaces/IUserRepository";
import { UserRepository } from "../data/Repositories/UserRepository";
import { useInventoryContext } from "./useInventoryContext";
const repo: IUserRepository = UserRepository;
export const useUser = () => {
    const { appUsers, setAppUsers } = useInventoryContext();
    return {
        appUsers,
        async getAllAsync(){
            try{
                const handle = await repo.GetAllAsync();
                setAppUsers([...handle])
            }
            catch(e){
                console.error(e)
                throw e;
            }
        },
        async putAsync(newUser: User){
            try{
                const handle = await repo.UpdateAsync(newUser);
                setAppUsers(formy => formy.map(u => {
                    if(newUser.id === u.id){
                        return {
                            ...newUser
                        }
                    }
                    return u;
                }))
                return handle.message;
            }
            catch(e){
                console.error(e)
                throw e;
            }
        },
        async postAsync(newUser: User){
            try{
                const handle = await repo.CreateAsync(newUser);
                setAppUsers(formy => [...formy, newUser])
                return handle.message;
            }
            catch(e){
                console.error(e)
                throw e;
            }
        },
        async deleteAsync(id:number){
            try{
                const handle = await repo.DeleteAsync(id);
                setAppUsers(formy => formy.filter(u => u.id !== id))
                return handle.message;
            }
            catch(e){
                console.error(e)
                throw e;
            }
        },
        async getAsync(id:number){
            try{
                const handle = await repo.GetByIdAsync(id);
                handle.contraseña = "";
                return handle;
            }
            catch(e){
                console.error(e)
                throw e;
            }
        }


    }
}