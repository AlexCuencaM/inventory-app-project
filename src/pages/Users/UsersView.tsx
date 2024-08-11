import { UserEdit } from './components/UserEdit'
import { UserCreate } from './components/UserCreate'
import { UserTableView } from './components/UserTableView'
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useUser } from '../../hooks/useUser';
export const UsersView = () => {
  const { appUsers, getAllAsync } = useUser();
  useEffect(() => {
    getAllAsync().then();
  }, [])
  return (
    <>
        <Typography variant="h1">
            Usuarios
        </Typography>
        <UserCreate/>
        <UserTableView rows={appUsers}/>
        <UserEdit/>
    </>
  )
}
