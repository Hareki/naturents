import concat from 'classnames';
import { DefaultToolTip } from '../../tooltip/tooltip';
import { getButtonJSX } from '../button-generator';
import scss from './icon-button-outlined.module.scss';

function OutlinedIconButton({
  href,
  onClick,
  children,
  className,
  tooltip,
  normalAnchor,
  ...props
}) {
  let buttonClassName = scss['icon-button'];
  if (className) buttonClassName = concat(buttonClassName, className);

  const buttonJSX = getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'icon-outlined',
    props,
    children
  });

  if (tooltip)
    return (
      <DefaultToolTip tooltip={tooltip}>{buttonJSX}</DefaultToolTip>
    );
  return buttonJSX;
}

export default OutlinedIconButton;
