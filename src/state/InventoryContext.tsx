import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialUser } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useInventoryContext';
import { User } from '../data/Entities/User';
interface SurveyContextProps{
    children: JSX.Element;
}
export const InventoryContext = ({children}: SurveyContextProps) => {
    const [user, setUser] = useState<UserState>(initialUser)
    const [openCreateDialog, setOpenCreateDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [appUsers, setAppUsers] = useState<User[]>([])
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
        setUser
    }
  return (
    <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>  
  )
}
