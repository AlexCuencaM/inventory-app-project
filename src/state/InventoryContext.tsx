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
    const [openDialog, setOpenDialog] = useState(false)
    const [appUsers, setAppUsers] = useState<User[]>([])
    const value: MyContextProps = {
        user,
        appUsers,
        openDialog,
        setOpenDialog,
        setAppUsers,
        setUser
    }
  return (
    <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>  
  )
}
