import TextFieldMUI from '@mui/material/TextField';

const InputProps = {
  style: {
    fontSize: '1.6rem'
  }
};
const InputLabelProps = {
  style: {
    fontSize: '1.6rem'
  }
};
const inputSetting = { InputProps, InputLabelProps };

function TextField({ label, ...props }) {
  return (
    <TextFieldMUI
      fullWidth
      variant='outlined'
      label={label}
      {...inputSetting}
      {...props}
    />
  );
}

export default TextField;
