import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function CheckBox({ label, ...props }) {
  return (
    <FormControlLabel
      control={<Checkbox name='remember-me' />}
      label={label}
      {...props}
    />
  );
}

export default CheckBox;
