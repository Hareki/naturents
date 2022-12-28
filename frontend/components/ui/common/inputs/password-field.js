import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';

function PasswordField({ label, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function showPasswordClickHandler() {
    setShowPassword((prev) => !prev);
  }

  function mouseDownHandler(event) {
    event.preventDefault();
  }

  return (
    <FormControl variant='outlined'>
      <InputLabel
        sx={{
          fontSize: '1.6rem'
        }}
        htmlFor='password-field'>
        {label}
      </InputLabel>
      <OutlinedInput
        name='password-field'
        label={label}
        sx={{
          fontSize: '1.6rem'
        }}
        {...props}
        type={showPassword ? 'text' : 'password'}
        value={password}
        autoComplete='on'
        onChange={passwordChangeHandler}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={showPasswordClickHandler}
              onMouseDown={mouseDownHandler}
              edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default PasswordField;
