import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import concat from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { getCurrencyFormat } from '../../../../../helpers/frontend-helpers/format-helper';
import { getDishIdByName } from '../../../../../helpers/string-helper';
import OutlinedIconButton from '../../common/buttons/icon-button/icon-button-outlined';
import CommonCard from '../../common/card/common-card';
import FillImage from '../../common/image/fill-image';
import Modal from '../../common/modal/modal';
import DishDetails from '../dish-details/dish-details';
import scss from './dish-card.module.scss';

function DishCard(props) {
  const [detailsAreVisible, setDetailsAreVisible] = useState(false);
  const [descriptionMaxLines, setDescriptionMaxLines] = useState(0);

  const nameRef = useRef();

  useEffect(() => {
    const lineHeight = window
      .getComputedStyle(nameRef.current, null)
      .getPropertyValue('line-height')
      .replace('px', '');

    const nameHeight = nameRef.current.clientHeight;
    const nameLines = nameHeight / lineHeight;
    setDescriptionMaxLines(5 - nameLines);
  }, [props.name]);

  function quickViewClickHandler() {
    setDetailsAreVisible(true);
  }
  function closeHandler() {
    setDetailsAreVisible(false);
  }

  const cardItemSoldOut = {
    [scss['card-item--sold-out']]: !props.available
  };

  const computingHeight = {
    [scss.hidden]: descriptionMaxLines === 0
  };

  const cardContentSoldOut = {
    [scss['card-content--sold-out']]: !props.available
  };

  const formattedPrice = getCurrencyFormat(props.price);

  return (
    <CommonCard
      className={
        'pd-none ' +
        concat(scss['card-item'], cardItemSoldOut, computingHeight)
      }>
      <div
        className={concat(scss['card-content'], cardContentSoldOut)}>
        <FillImage
          priority
          sizes='10vw'
          wrapperClasses={scss['card-image']}
          alt={props.description}
          src={props.imageUrls[0]}
        />

        <div className={scss['card-description']}>
          <h3 ref={nameRef}>{props.name}</h3>
          <p
            className={scss.description}
            style={{
              WebkitLineClamp: descriptionMaxLines
            }}>
            {props.description}
          </p>
          <div className={scss['card-information']}>
            <p className={scss.energy}>{props.energy} cal</p>
            <p className={scss.currency}>{formattedPrice}</p>
          </div>
        </div>
      </div>

      <div className={scss['popping-in-name']}>
        <h3>{props.name}</h3>
      </div>
      <div className={scss['card-actions']}>
        <OutlinedIconButton
          className={scss['action-button']}
          tooltip='Xem nhanh'
          onClick={quickViewClickHandler}>
          <VisibilityOutlinedIcon />
        </OutlinedIconButton>

        <OutlinedIconButton
          className={scss['action-button']}
          tooltip='Mở trong trang mới'
          target='blank'
          href={`/dish/${getDishIdByName(props._id)}`}
          normalAnchor>
          <OpenInNewIcon />
        </OutlinedIconButton>
      </div>

      <Modal
        className={scss['details-modal']}
        visible={detailsAreVisible}
        onClose={closeHandler}>
        <OutlinedIconButton
          className={scss['close-button']}
          onClick={closeHandler}>
          <CloseIcon />
        </OutlinedIconButton>
        <DishDetails className={scss.details} {...props} />
      </Modal>
    </CommonCard>
  );
}

export default DishCard;
