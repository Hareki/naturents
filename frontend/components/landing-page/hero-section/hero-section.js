import SouthIcon from '@mui/icons-material/South';
import { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { scrollIntoId } from '../../../../helpers/frontend-helpers/dom-helper';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import OutlinedIconButton from '../..//ui/common/buttons/icon-button/icon-button-outlined';
import PrimaryButton from '../..//ui/common/buttons/primary-button/primary-button';
import SecondaryButton from '../..//ui/common/buttons/secondary-button/secondary-button';
import FillImage from '../../ui/common/image/fill-image';
import scss from './hero-section.module.scss';
import heroImage from '../../../../public/images/landing-page/hero-section/background-4.jpeg';
const HeroSection = forwardRef(({ repeat, isInView }, ref) => {
  const show = useLPScrollHandler({ isInView, repeat });
  const nodeRef = useRef();

  return (
    <section ref={ref} id='hero-section' className={scss.hero}>
      <FillImage
        wrapperClasses={scss['background']}
        sizes='100vw'
        priority
        quality={100}
        placeholder='blur'
        alt=''
        src={heroImage}
      />
      <CSSTransition
        nodeRef={nodeRef}
        timeout={0}
        in={show}
        classNames={{
          enterDone: scss['main--show']
        }}>
        <div className={'section mt-none ' + scss.main} ref={nodeRef}>
          <div className={scss.content}>
            <h1 className={'primary-heading mb-md ' + scss.heading}>
              Thực phẩm <span>hữu cơ</span> tươi ngon và giàu dinh
              dưỡng
            </h1>

            <p className={scss.description}>
              Chúng tôi là một trong những nhà phân phối hàng đầu về
              thực phẩm hữu cơ giúp bạn có chế độ ăn uống lành mạnh
              hơn. Trải nghiệm ngay và để chúng tôi giao những món ăn
              yêu thích đến cho bạn trong vòng chưa đầy một tiếng!
            </p>

            <div>
              <PrimaryButton
                className={scss['primary-button']}
                href='/menu/appetizers'>
                Chọn món ngay
              </PrimaryButton>
              <SecondaryButton
                className={scss['secondary-button']}
                onClick={(event) =>
                  scrollIntoId(event, 'features-section', 'center')
                }>
                Tìm hiểu thêm
                <SouthIcon />
              </SecondaryButton>
            </div>

            <div className={scss.statistics}>
              <div className={scss['statistics--images']}>
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-1.jpg'
                  alt='Customer photo'
                />
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-2.jpg'
                  alt='Customer photo'
                />
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-3.jpg'
                  alt='Customer photo'
                />
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-4.jpg'
                  alt='Customer photo'
                />
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-5.jpg'
                  alt='Customer photo'
                />
                <FillImage
                  sizes='100px'
                  wrapperClasses={scss['image-wrapper']}
                  src='/images/landing-page/hero-section/hero-customer-6.jpg'
                  alt='Customer photo'
                />
              </div>
              <p className={scss['statistics--text']}>
                <span>Hơn 250,000 </span>
                đơn đặt hàng trong năm qua!
              </p>
            </div>
          </div>

          <OutlinedIconButton
            className={scss['mouse-wrapper']}
            onClick={(event) =>
              scrollIntoId(event, 'features-section', 'center')
            }>
            <div className={scss.mouse}>
              <FillImage
                wrapperClasses={scss['mouse-wheel']}
                width='.8rem'
                height='.8rem'
                alt='scroll wheel'
                src='/images/landing-page/hero-section/scroll-wheel.svg'
              />
            </div>
          </OutlinedIconButton>
        </div>
      </CSSTransition>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
