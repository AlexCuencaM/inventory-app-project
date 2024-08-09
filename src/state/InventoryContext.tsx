import { useState } from 'react'
import { User } from '../data/Entities/UserLogin';
import { initialUser } from './initialStates';
import { MyContext, MyContextProps } from '../hooks/useInventoryContext';
interface SurveyContextProps{
    children: JSX.Element;
}
export const InventoryContext = ({children}: SurveyContextProps) => {
    const [user, setUser] = useState<User>(initialUser)
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
