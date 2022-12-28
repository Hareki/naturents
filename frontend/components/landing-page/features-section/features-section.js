import { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import CommonCard from '../../ui/common/card/common-card';
import FillImage from '../../ui/common/image/fill-image';
import scss from './features-section.module.scss';

const featureData = [
  {
    title: 'Chất lượng cao',
    description:
      ' Nguyên liệu được chọn lọc kĩ càng bởi các đầu bếp có nhiều năm kinh nghiệm',
    img: '/images/landing-page/features-section/salad.svg'
  },
  {
    title: 'Canh tác hữu cơ',
    description:
      'Thực phẩm hoàn toàn không chứa hoá chất bảo quản, thuốc kích thích tăng trưởng.',
    img: '/images/landing-page/features-section/leaf.svg'
  },
  {
    title: 'Giao hàng nhanh',
    description:
      'Hệ thống cửa hàng trên toàn quốc, đảm bảo thời gian giao hàng trong vòng 1 tiếng.',
    img: '/images/landing-page/features-section/delivery-truck.svg'
  }
];

function getFeatureClasses() {
  const featureClasses = [];
  for (let i = 1; i <= 3; i++) {
    let base = scss['feature-item'];
    if (i != 1) base = `${base} ${scss['vertical-line']}`;
    featureClasses.push(base);
  }
  return featureClasses;
}

const FeaturesSection = forwardRef(({ repeat, isInView }, ref) => {
  const show = useLPScrollHandler({ isInView, repeat });
  const nodeRef = useRef();
  const featureClasses = getFeatureClasses();
  return (
    <section ref={ref} id='features-section' className='section'>
      <CommonCard>
        <CSSTransition
          nodeRef={nodeRef}
          timeout={0}
          in={show}
          classNames={{
            enterDone: scss['container-show']
          }}>
          <div className={scss.container} ref={nodeRef}>
            {featureData.map(({ title, description, img }, index) => (
              <div className={featureClasses[index]} key={index}>
                <FillImage
                  width='8.4rem'
                  height='8.4rem'
                  src={img}
                  alt={`Feature ${index + 1}`}
                  wrapperClasses={scss['image-wrapper']}>
                  <div
                    data-circle={`${index + 1}`}
                    className={scss.circle}
                  />
                </FillImage>
                <h3 className={scss.title}>{title}</h3>
                <p className={scss.description}>{description}</p>
              </div>
            ))}
          </div>
        </CSSTransition>
      </CommonCard>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
