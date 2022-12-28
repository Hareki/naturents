import { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import FillImage from '../../ui/common/image/fill-image';
import scss from './as-featured-section.module.scss';

const logoData = [
  {
    img: '/images/landing-page/as-featured-section/food-news.png',
    ratio: 460 / 366
  },
  {
    img: '/images/landing-page/as-featured-section/cooky.png',
    ratio: 1111 / 350
  },
  {
    img: '/images/landing-page/as-featured-section/lozi.png',
    ratio: 1928 / 683
  },
  {
    img: '/images/landing-page/as-featured-section/foody.png',
    ratio: 523 / 153
  },
  {
    img: '/images/landing-page/as-featured-section/riviu.png',
    ratio: 1
  }
];

const imageHeight = 35;
const AsFeaturedSection = forwardRef(({ repeat, isInView }, ref) => {
  const show = useLPScrollHandler({ isInView, repeat });
  const nodeRef = useRef();
  return (
    <section ref={ref} className='section mt-6r'>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={0}
        in={show}
        classNames={{
          enterDone: scss['container--show']
        }}>
        <div className={scss.container} ref={nodeRef}>
          <h2 className={scss.heading}>Được đề xuất tại</h2>
          <div className={scss.logos}>
            {logoData.map(({ img, ratio }, index) => (
              <FillImage
                key={index}
                sizes='7vw'
                height={imageHeight}
                width={imageHeight * ratio}
                src={img}
                alt={`${img.slice(img.lastIndexOf('/'))}-logo`}
                wrapperClasses={scss.logo}
              />
            ))}
          </div>
        </div>
      </CSSTransition>
    </section>
  );
});
AsFeaturedSection.displayName = 'AsFeaturedSection';

export default AsFeaturedSection;
