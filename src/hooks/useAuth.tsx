import { useInventoryContext } from './useInventoryContext'
import { ILoginRepository } from '../data/Interfaces/ILoginRepository';
import { LoginRepository } from '../data/Repositories/LoginRepository';
import { UserLogin } from '../data/Entities/UserLogin';
import { baseStorage } from '../services/baseStorage';
import { IAuthState } from '../state/Interfaces/IAuthState';
import { initialUser } from '../state/initialStates';
import { useNavigate } from 'react-router-dom';
const repo:ILoginRepository = LoginRepository; 
const {SaveData, RemoveData} = baseStorage();
type AuthStateProps = {
    loginAsync(user: UserLogin): Promise<void>;
    logout(): void;
} & IAuthState;

export const useAuth = () => {
  const {user, setUser} = useInventoryContext();
  const navigate = useNavigate();
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
    logout(){
        RemoveData('user');
        setUser(initialUser);
        navigate("/");
    },
    IsUserLogged() {
        console.log(user)
        return user.IsLogged;
    },
  } as AuthStateProps;
}
