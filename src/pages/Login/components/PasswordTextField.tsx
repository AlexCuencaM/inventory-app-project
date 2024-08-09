import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import React from 'react'

export const PasswordTextField = (props: OutlinedInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name={props.name}
            onChange={props.onChange}
            value={props.value}
          />
        </FormControl> 
  )
}
