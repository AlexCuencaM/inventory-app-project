import { createContext, useContext } from "react";
import { UserState } from "../data/Entities/UserLogin";
import { User } from "../data/Entities/User";
import { Product } from "../data/Entities/Product";
import { Laboratory } from "../data/Entities/Laboratory";
import { Client } from "../data/Entities/Client";
import { Inventory } from "../data/Entities/Inventory";
import { Provider } from "../data/Entities/Provider";

import { Sales } from "../data/Entities/Sales";
export interface MyContextProps {
  user: UserState;

  appUsers: User[];
  appProducts: Product[];
  appLaboratories: Laboratory[];
  appClients: Client[];
  appInventory: Inventory[];
  appProviders: Provider[];

  openEditDialog: boolean;
  openDeleteDialog: boolean;
  openCreateDialog: boolean;

    openDetailDialog: boolean;
    sales: Sales[];
    setSales:React.Dispatch<React.SetStateAction<Sales[]>>;
    setOpenDetailDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCreateDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDeleteDialog: React.Dispatch<React.SetStateAction<boolean>>;

  setAppUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setAppProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setAppLaboratories: React.Dispatch<React.SetStateAction<Laboratory[]>>;
  setAppClients: React.Dispatch<React.SetStateAction<Client[]>>;
  setAppInventory: React.Dispatch<React.SetStateAction<Inventory[]>>;
  setAppProviders: React.Dispatch<React.SetStateAction<Provider[]>>;

  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}
export const MyContext = createContext<MyContextProps>(null!);
export const useInventoryContext = () => useContext(MyContext);
