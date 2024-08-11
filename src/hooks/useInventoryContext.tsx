import { createContext, useContext } from "react";
import { UserState } from "../data/Entities/UserLogin";
import { User } from "../data/Entities/User";
export interface MyContextProps{
    user: UserState;
    appUsers: User[];
    openEditDialog: boolean;
    openDeleteDialog: boolean;
    openCreateDialog: boolean;
    setOpenCreateDialog: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;
    setAppUsers: React.Dispatch<React.SetStateAction<User[]>>
    setUser: React.Dispatch<React.SetStateAction<UserState>>;
}
export const MyContext = createContext<MyContextProps>(null!);
export const useInventoryContext = () => useContext(MyContext);