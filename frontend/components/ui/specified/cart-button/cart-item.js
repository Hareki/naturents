import { getCurrencyFormat } from '../../../../../helpers/frontend-helpers/format-helper';
import FillImage from '../../common/image/fill-image';
import scss from './cart-item.module.scss';
function CartItem({ image, name, quantity, unitPrice }) {
  const formattedPrice = getCurrencyFormat(unitPrice);
  return (
    <div className={scss['cart-item']}>
      <FillImage
        wrapperClasses={scss.img}
        src={image}
        alt=''
        sizes='120px'
      />
      <div className={scss['info-wrapper']}>
        <div className={scss.name}>{name}</div>
        <div className={scss.info}>
          <span className={scss.price}>{formattedPrice}</span>
          <span className={scss.quantity}>{quantity}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
