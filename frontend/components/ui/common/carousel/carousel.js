import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import concat from 'classnames';
import { Fragment } from 'react';
import { Carousel as BaseCarousel } from 'react-responsive-carousel';
import FilledIconButton from '../../common/buttons/icon-button/icon-button-filled';
import FillImage from '../image/fill-image';
import scss from './carousel.module.scss';

function Carousel({
  imageUrls,
  showIndicators,
  showThumbs,
  autoPlay
}) {
  const customImages = imageUrls.map((element, index) => (
    <Fragment key={index}>
      <FillImage
        sizes='20vw'
        wrapperClasses={scss['image-wrapper']}
        src={element}
        alt=''
        fill
      />
    </Fragment>
  ));

  const customArrowButton = (onClickHandler, direction) => {
    return (
      <FilledIconButton
        className={concat(
          scss['arrow-button'],
          direction === 'left' ? scss.left : scss.right
        )}
        onClick={onClickHandler}>
        {direction === 'left' ? (
          <ArrowBackIosRoundedIcon />
        ) : (
          <ArrowForwardIosRoundedIcon />
        )}
      </FilledIconButton>
    );
  };

  const customIndicator = (onClickHandler, isSelected, index) => {
    if (isSelected) {
      return (
        <li
          key={index}
          className={concat(
            scss.indicator,
            scss['indicator--selected']
          )}
        />
      );
    }
    return (
      <li
        key={index}
        className={scss.indicator}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        role='button'
      />
    );
  };

  const customThumbs = (children) =>
    children.map((element, index) => (
      <Fragment key={index}>
        <FillImage
          sizes='100px'
          quality={100}
          wrapperClasses={scss['thumbnail-wrapper']}
          src={element.props.children.props.src}
          alt=''
          fill
        />
      </Fragment>
    ));
  return (
    <BaseCarousel
      autoPlay={autoPlay}
      className={scss.carousel}
      swipeable
      emulateTouch
      interval={2000}
      infiniteLoop
      useKeyboardArrows
      stopOnHover
      showThumbs={showThumbs}
      showIndicators={showIndicators}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && customArrowButton(onClickHandler, 'left')
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && customArrowButton(onClickHandler, 'right')
      }
      renderIndicator={customIndicator}
      renderThumbs={customThumbs}>
      {customImages}
    </BaseCarousel>
  );
}

export default Carousel;
