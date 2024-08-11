import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialUser } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useInventoryContext';
import { User } from '../data/Entities/User';
import { Sales } from '../data/Entities/Sales';
interface SurveyContextProps{
    children: JSX.Element;
}
export const InventoryContext = ({children}: SurveyContextProps) => {
    const [user, setUser] = useState<UserState>(initialUser)
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openDetailDialog, setOpenDetailDialog] = useState(false);
    const [appUsers, setAppUsers] = useState<User[]>([])
    const [sales, setSales] = useState<Sales[]>([])
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
        setOpenDetailDialog,
        openDetailDialog,
        setSales,
        sales,
    }
  return (
    <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>  
  )
}
