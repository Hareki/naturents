import LinkButton from '../ui/common/buttons/link-button/link-button';
import PrimaryButton from '../ui/common/buttons/primary-button/primary-button';
import CheckBox from '../ui/common/inputs/check-box';
import PasswordField from '../ui/common/inputs/password-field';
import TextField from '../ui/common/inputs/text-field';
import scss from './sign-in-panel.module.scss';

function SignInPanel(props) {
  return (
    <form className={scss.form}>
      <TextField label='Tài khoản' />
      <PasswordField label='Mật khẩu' />
      <div className={scss['input-group']}>
        <CheckBox label='Ghi nhớ tôi' />
        <LinkButton
          className={scss['forgot-password']}
          noArrow
          onClick={() => {}}>
          Quên mật khẩu?
        </LinkButton>
      </div>
      <PrimaryButton onClick={() => {}}>Đăng nhập</PrimaryButton>
    </form>
  );
}

export default SignInPanel;
