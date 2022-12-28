import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import concat from 'classnames';
import { useEffect, useRef, useState } from 'react';
import TextButton from '../../common/buttons/text-button/text-button';
import scss from './cart-button.module.scss';
import CartQuickView from './cart-quick-view';

function CartButton(props) {
  const nodeRef = useRef();

  const [showCart, setShowCart] = useState(false);
  const [mouseLeavedButton, setMouseLeavedButton] = useState(true);
  const [mouseLeavedCart, setMouseLeavedCart] = useState(true);
  const [mouseLeavedExpander, setMouseLeavedExpander] =
    useState(true);

  useEffect(() => {
    if (mouseLeavedButton && mouseLeavedCart && mouseLeavedExpander)
      setShowCart(false);
  }, [mouseLeavedButton, mouseLeavedCart, mouseLeavedExpander]);

  return (
    <div className={scss.cart}>
      <TextButton
        onMouseEnter={() => {
          setShowCart(true);
          setMouseLeavedButton(false);
        }}
        onMouseLeave={() => {
          setMouseLeavedButton(true);
        }}
        className={concat(scss['cart-button'], {
          [scss['cart-button-active']]: showCart === true
        })}
        onClick={() => {}}>
        <Badge
          sx={{
            '& .MuiBadge-badge': {
              color: '#fff'
            }
          }}
          color='primary'
          badgeContent={5}>
          <ShoppingCartOutlinedIcon />
        </Badge>
        <span>Giỏ hàng</span>
      </TextButton>

      <div
        className={scss.expander}
        onMouseEnter={() => {
          setMouseLeavedExpander(false);
        }}
        onMouseLeave={() => {
          setMouseLeavedExpander(true);
        }}
      />

      <CartQuickView
        nodeRef={nodeRef}
        className={scss['cart-quick-view']}
        show={showCart}
        onMouseLeaveHandler={setMouseLeavedCart}
      />
    </div>
  );
}

export default CartButton;
