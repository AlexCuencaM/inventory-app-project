import { useState } from 'react'
import { UserState } from '../data/Entities/UserLogin';
import { initialUser } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useInventoryContext';
interface SurveyContextProps{
    children: JSX.Element;
}
export const InventoryContext = ({children}: SurveyContextProps) => {
    const [user, setUser] = useState<UserState>(initialUser)
    const value: MyContextProps = {
        user,
        setUser
    }
  return (
    <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>  
  )
}
