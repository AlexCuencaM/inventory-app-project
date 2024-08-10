import { UserEdit } from './components/UserEdit'
import { UserCreate } from './components/UserCreate'
import { UserTableView } from './components/UserTableView'

export const UsersView = () => {
  return (
    <>
        <UserCreate/>
        <UserTableView/>
        <UserEdit/>
    </>
  )
}
