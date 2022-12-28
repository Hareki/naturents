import concat from 'classnames';
import { DefaultToolTip } from '../../tooltip/tooltip';
import { getButtonJSX } from '../button-generator';
import scss from './icon-button-filled.module.scss';

function FilledIconButton({
  href,
  onClick,
  children,
  className,
  tooltip,
  ...props
}) {
  let buttonClassName = scss['icon-button'];
  if (className) buttonClassName = concat(buttonClassName, className);

  const buttonJSX = getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'icon-filled',
    props,
    children
  });

  if (tooltip) {
    return (
      <DefaultToolTip tooltip={tooltip}>{buttonJSX}</DefaultToolTip>
    );
  }

  return buttonJSX;
}

export default FilledIconButton;
