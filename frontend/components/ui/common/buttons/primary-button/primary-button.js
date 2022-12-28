import concat from 'classnames';
import { getButtonJSX } from '../button-generator';
import scss from './primary-button.module.scss';

function PrimaryButton({
  href,
  onClick,
  children,
  className,
  ...props
}) {
  let buttonClassName = scss['primary-button'];
  if (className) buttonClassName = concat(buttonClassName, className);

  return getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'primary',
    props,
    children
  });
}

export default PrimaryButton;
