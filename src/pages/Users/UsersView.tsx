import { UserEdit } from './components/UserEdit'
import { UserCreate } from './components/UserCreate'
import { UserTableView } from './components/UserTableView'
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useUser } from '../../hooks/useUser';
import { initialAppUser } from '../../state/initialStates';
import { useForm } from '../../hooks/useForm';

export const UsersView = () => {
  const { appUsers, getAllAsync } = useUser();
  const { form, setForm, setStateForm } = useForm(initialAppUser);
  useEffect(() => {
    getAllAsync().then();
    console.log(appUsers);
  }, [])
  return (
    <>
        <Typography variant="h1">
            Usuarios
        </Typography>
        <UserCreate/>
        <UserTableView rows={appUsers} setStateForm={setStateForm}/>
        <UserEdit setStateForm={setStateForm} form={form} setForm={setForm}/>
    </>
  )
}
