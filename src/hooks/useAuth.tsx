import { useInventoryContext } from './useInventoryContext'
import { ILoginRepository } from '../data/Interfaces/ILoginRepository';
import { LoginRepository } from '../data/Repositories/LoginRepository';
import { UserLogin } from '../data/Entities/UserLogin';
import { baseStorage } from '../services/baseStorage';
import { IAuthState } from '../state/Interfaces/IAuthState';
const repo:ILoginRepository = LoginRepository; 
const {SaveData,} = baseStorage();
type AuthStateProps = {
    loginAsync(user: UserLogin): Promise<void>;
} & IAuthState;

export const useAuth = () => {
  const {user, setUser} = useInventoryContext();
  return {
    async loginAsync(user: UserLogin){
        try{
            const handle = await repo.loginAsync(user);
            setUser(handle);
            SaveData(handle, "user");
        }
        catch(e: any){
            console.error(e)
            throw e;
        }
    },
    IsUserLogged() {
        return user.IsLogged;
    },
  } as AuthStateProps;
}
