import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialSales, initialUser } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useInventoryContext';
import { User } from '../data/Entities/User';
import { Product } from "../data/Entities/Product";
import { Laboratory } from "../data/Entities/Laboratory";
import { Client } from "../data/Entities/Client";
import { Inventory } from "../data/Entities/Inventory";
import { Provider } from "../data/Entities/Provider";
import { Sales } from '../data/Entities/Sales';

interface SurveyContextProps{
    children: JSX.Element;
}

export const InventoryContext = ({ children }: SurveyContextProps) => {
  const [user, setUser] = useState<UserState>(initialUser);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [appUsers, setAppUsers] = useState<User[]>([]);
  const [appProducts, setAppProducts] = useState<Product[]>([]);
  const [appLaboratories, setAppLaboratories] = useState<Laboratory[]>([]);
  const [appClients, setAppClients] = useState<Client[]>([]);
  const [appInventory, setAppInventory] = useState<Inventory[]>([]);
  const [appProviders, setAppProviders] = useState<Provider[]>([]);
  const [openDetailDialog, setOpenDetailDialog] = useState(false);
  const [sales, setSales] = useState<Sales[]>([])
  const [sale, setSale] = useState<Sales>(initialSales)

  const value: MyContextProps = {
    user,
    appUsers,
    openEditDialog,
    openDeleteDialog,
    openCreateDialog,
    setOpenCreateDialog,
    setOpenDeleteDialog,
    setOpenEditDialog,
    setAppUsers,
    setUser,
    appProducts,
    setAppProducts,
    appLaboratories,
    setAppLaboratories,
    appClients,
    setAppClients,
    appInventory,
    setAppInventory,
    appProviders,
    setAppProviders,
    setOpenDetailDialog,
    openDetailDialog,
    setSales,
    sales,
    setSale,
    sale,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
