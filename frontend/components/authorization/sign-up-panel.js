import PrimaryButton from '../ui/common/buttons/primary-button/primary-button';
import PasswordField from '../ui/common/inputs/password-field';
import TextField from '../ui/common/inputs/text-field';
import scss from './sign-up-panel.module.scss';

function SignUpPanel(props) {
  return (
    <form className={scss.form}>
      <TextField label='Họ và tên' />
      <TextField label='Email' />
      <TextField label='Số điện thoại' />
      <TextField
        className={scss.address}
        multiline
        minRows={2}
        maxRows={2}
        label='Địa chỉ'
      />
      <div className={scss['input-group']}>
        <PasswordField label='Mật khẩu' />
        <PasswordField label='Xác nhận mật khẩu' />
      </div>
      <PrimaryButton onClick={() => {}}>Đăng ký</PrimaryButton>
    </form>
  );
}

export default SignUpPanel;
