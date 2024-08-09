import { createContext, useContext } from "react";
import { User } from "../data/Entities/UserLogin";
export interface MyContextProps{
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}
export const MyContext = createContext<MyContextProps>(null!);
export const useInventoryContext = () => useContext(MyContext);