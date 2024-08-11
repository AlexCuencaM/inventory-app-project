
import {  Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import { PasswordTextField } from './components/PasswordTextField'
import { FormEvent } from 'react'
import { UserLogin } from '../../data/Entities/UserLogin';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { inventoryAlert } from '../../ui/Alert/InventoryAlert';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialData:UserLogin = {
    Username: '',
    Password: ''
}
export const LoginView = () => {
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
         <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              autoFocus
              name='Username'
              label="Usuario"
              placeholder='ej: usuario123'
              value={form.Username}
              onChange={e => {
                  setForm(e.target.value, "Username")
              }}
            />
            <PasswordTextField name={"Password"}
                value={form.Password}
                onChange={e => {
                setForm(e.target.value, "Password")
                }}
                />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
             {/*<Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> 
            </Grid>*/}
          </Box>
        </Box>
    </Container>
  )
}
