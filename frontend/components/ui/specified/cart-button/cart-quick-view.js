import PaymentIcon from '@mui/icons-material/Payment';
import concat from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { getCurrencyFormat } from '../../../../../helpers/frontend-helpers/format-helper';
import PrimaryButton from '../../common/buttons/primary-button/primary-button';
import SecondaryButton from '../../common/buttons/secondary-button/secondary-button';
import CommonCard from '../../common/card/common-card';
import CartItem from './cart-item';
import scss from './cart-quick-view.module.scss';
import { dummyCartItems } from './dummy-data';

function CartQuickView({
  show,
  onMouseLeaveHandler,
  nodeRef,
  className
}) {
  const cartItems = dummyCartItems;
  const cartItemsJSX = cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  const total = 790_000;
  const formattedTotal = getCurrencyFormat(total);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={{
        enter: 0,
        exit: 300
      }}
      classNames={{
        enterActive: scss['cart-quick-view-wrapper-enter-active'],
        enterDone: scss['cart-quick-view-wrapper-enter-done']
      }}>
      <div
        className={concat(scss['cart-quick-view-wrapper'], className)}
        ref={nodeRef}
        autoFocus
        onMouseLeave={() => onMouseLeaveHandler(true)}
        onMouseEnter={() => {
          onMouseLeaveHandler(false);
        }}>
        <CommonCard className={concat(scss['cart-quick-view'])}>
          <div className={scss['cart-items']}>{cartItemsJSX}</div>
          <div className={scss['cart-actions']}>
            <div>
              Tổng tiền:&nbsp;
              <span className={scss.total}>{formattedTotal}</span>
            </div>
            <div>
              <SecondaryButton className={scss.details} href='/'>
                Chi tiết
              </SecondaryButton>
            </div>
            <div className={scss.checkout}>
              <PrimaryButton href='/'>
                <PaymentIcon />
                Thanh toán
              </PrimaryButton>
            </div>
          </div>
        </CommonCard>
      </div>
    </CSSTransition>
  );
}

export default CartQuickView;
