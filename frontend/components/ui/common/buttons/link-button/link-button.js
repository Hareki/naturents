import { getButtonJSX } from '../button-generator';
import scss from './link-button.module.scss';

function LinkButton({
  href,
  onClick,
  className,
  children,
  noArrow,
  ...props
}) {
  let buttonClassName = scss['link-button'];
  if (className)
    buttonClassName = `${scss['link-button']} ${className}`;

  const arrowIcon = (
    <svg
      className={scss['arrow-icon']}
      viewBox='0 0 6 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g className={scss['arrow-head']}>
        <path
          d='M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8'
          stroke='currentColor'
          strokeWidth='2'
        />
      </g>
      <g className={scss['arrow-body']}>
        <path d='M3.5 4.5H0' stroke='currentColor' strokeWidth='2' />
      </g>
    </svg>
  );

  const buttonJSX = getButtonJSX({
    href,
    onClick,
    buttonClassName,
    type: 'link',
    props,
    children
  });
  return (
    <div className={buttonClassName}>
      {buttonJSX}
      {!noArrow && arrowIcon}
    </div>
  );
}

export default LinkButton;
