import React from 'react';
import scss from './common-card.module.scss';
function Wrapper({ className, children, variant, ...props }) {
  return React.createElement(
    variant,
    { className, ...props },
    children
  );
}

function CommonCard({
  children,
  className,
  variant = 'div',
  ...props
}) {
  let cardClassName = scss.card;
  if (className) {
    cardClassName = `${scss.card} ${className}`;
  }

  return (
    <Wrapper variant={variant} className={cardClassName} {...props}>
      {children}
    </Wrapper>
  );
}

export default CommonCard;
