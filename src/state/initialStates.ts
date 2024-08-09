import { User } from '../data/Entities/UserLogin';
import { baseStorage } from '../services/baseStorage';
const { GetData }= baseStorage();
export const initialUser: User = GetData<User>('user') || {
    Name: "",
    Role: "",
    IsLogged: false
}

