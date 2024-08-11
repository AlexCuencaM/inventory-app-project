import { UserEdit } from './components/UserEdit'
import { UserCreate } from './components/UserCreate'
import { UserTableView } from './components/UserTableView'
import { IUserRepository } from '../../data/Interfaces/IUserRepository';
import { UserRepository } from '../../data/Repositories/UserRepository';
import { useEffect } from 'react';
const repo: IUserRepository = UserRepository;
export const UsersView = () => {
//   useEffect(() => {
//     repo.GetAllAsync().then(res => {
        
//     })
//   }, [])
  
  return (
    <>
        <UserCreate/>
        <UserTableView rows={[]}/>
        <UserEdit/>
    </>
  )
}
