import { User } from '../data/Entities/User';
import { UserState } from '../data/Entities/UserLogin';
import { baseStorage } from '../services/baseStorage';
const { GetData } = baseStorage();
export const initialUser: UserState = GetData("user-inventory-app") || {
    Name: "",
    Role: "",
    Token: "",
    IsLogged: false
} as UserState

export const initialAppUser: User = {
    id: 0
}