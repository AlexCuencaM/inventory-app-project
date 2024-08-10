import { createContext, useContext } from "react";
import { UserState } from "../data/Entities/UserLogin";
export interface MyContextProps{
    user: UserState;
    setUser: React.Dispatch<React.SetStateAction<UserState>>;
}
export const MyContext = createContext<MyContextProps>(null!);
export const useInventoryContext = () => useContext(MyContext);