
import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { PasswordTextField } from './components/PasswordTextField'
import { FormEvent } from 'react'
import { UserLogin } from '../../data/Entities/UserLogin';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { inventoryAlert } from '../../ui/Alert/InventoryAlert';

const initialData:UserLogin = {
    Username: '',
    Password: ''
}
export const Login = () => {
    const navigate = useNavigate();
    const request = useAuth();
    const { form, setForm } = useForm(initialData);
    const { state } = useLocation();
    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        request.loginAsync(form).then(() => {
            navigate(state?.path || "/app");
        })
        .catch((e:any) => {
            inventoryAlert(e.response?.data?.Message ?? "Unexpected error")
        })
    }
  
  return (
    <Container fixed>
        <Grid spacing={2} component="form" onSubmit={handleSubmit}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            height={"100vh"}
        >
            <Grid item>
                <Typography variant="h1">
                    Login
                </Typography>
            </Grid>
            <Grid item>
                <TextField
                    fullWidth
                    name='Username'
                    label="Usuario"
                    placeholder='ej: usuario123'
                    required
                    value={form.Username}
                    onChange={e => {
                        setForm(e.target.value, "Username")
                    }}
                />
            </Grid>
            <Grid item>
                <PasswordTextField name={"Password"}
                 value={form.Password}
                 onChange={e => {
                    setForm(e.target.value, "Password")
                    }}
                 />
            </Grid>
            <Grid item>

                <Button type='submit' variant="contained">
                    Submit
                </Button>
            </Grid>
        </Grid>
    </Container>
  )
}
