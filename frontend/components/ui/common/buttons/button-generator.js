import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import concat from 'classnames';
import Link from 'next/link';
import scss from './button-generator.module.scss';

const PrimaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[0],
  fill: theme.palette.grey[0],
  backgroundColor: 'primary',
  textTransform: 'none'
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.grey[0],
  textTransform: 'none'
}));

const TextButton = styled(Button)(({}) => ({
  textTransform: 'none'
}));

const NormalButton = ({ children }) => <button>{children}</button>;

export function getButtonJSX({
  href,
  onClick,
  buttonClassName,
  type,
  children,
  normalAnchor,
  props
}) {
  let variant, ButtonJSX;
  switch (type) {
    case 'primary':
      variant = 'contained';
      ButtonJSX = PrimaryButton;
      break;

    case 'secondary':
      variant = 'outlined';
      ButtonJSX = SecondaryButton;
      break;

    case 'text':
      variant = 'text';
      ButtonJSX = TextButton;
      break;

    case 'icon-outlined':
      variant = '';
      ButtonJSX = IconButton;
      break;

    case 'icon-filled':
      variant = 'contained';
      ButtonJSX = IconButton;
      break;

    case 'link':
      variant = 'link';
      ButtonJSX = NormalButton;
      break;

    default:
      throw new Error('Invalid button configuration');
  }

  const extraButtonSetting = {};
  if (ButtonJSX === PrimaryButton)
    extraButtonSetting.disableElevation = true;

  if (href) {
    if (variant === 'link') {
      return (
        <Link {...props} href={href}>
          {children}
        </Link>
      );
    }
    return (
      <ButtonJSX
        className={buttonClassName}
        variant={variant}
        {...extraButtonSetting}>
        <Link
          className={concat(scss.link, scss['base-normal-button'])}
          href={href}
          tabIndex='-1'
          {...props}>
          {children}
        </Link>
      </ButtonJSX>
    );
  } else if (onClick) {
    return (
      <ButtonJSX
        {...props}
        className={buttonClassName}
        variant={variant}
        {...extraButtonSetting}
        onClick={onClick}>
        {children}
      </ButtonJSX>
    );
  } else {
    throw new Error('Invalid button configuration');
  }
}
