import { getButtonJSX } from '../button-generator';
import scss from './secondary-button.module.scss';

function SecondaryButton({
  href,
  onClick,
  children,
  className,
  ...props
}) {
  let buttonClassName = scss['secondary-button'];
  if (className)
    buttonClassName = `${scss['secondary-button']} ${className}`;

  return getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'secondary',
    props,
    children
  });
}

export default SecondaryButton;
