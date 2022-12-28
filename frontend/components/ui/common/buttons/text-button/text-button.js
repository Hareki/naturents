import { getButtonJSX } from '../button-generator';
import scss from './text-button.module.scss';

function TextButton({
  href,
  onClick,
  children,
  className,
  ...props
}) {
  let buttonClassName = scss['text-button'];
  if (className)
    buttonClassName = `${scss['text-button']} ${className}`;

  return getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'text',
    props,
    children
  });
}

export default TextButton;
