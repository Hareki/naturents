import { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import FillImage from '../../ui/common/image/fill-image';
import scss from './about-section.module.scss';

const AboutSection = forwardRef(({ repeat, isInView }, ref) => {
  const show = useLPScrollHandler({ isInView, repeat });
  const nodeRef = useRef();

  return (
    <section ref={ref} className='section'>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={0}
        in={show}
        classNames={{
          enterDone: scss['container--show']
        }}>
        <div className={scss.container} ref={nodeRef}>
          <div className={scss['image-grid']}>
            <FillImage
              alt='Customer photo'
              src='/images/landing-page/about-section/large-1.jpg'
              sizes='15vw'
              quality={90}
              wrapperClasses={scss['image-wrapper']}
              imgClasses={scss.image}
            />
            <FillImage
              alt='Customer photo'
              src='/images/landing-page/about-section/small-2.jpg'
              sizes='15vw'
              quality={90}
              wrapperClasses={scss['image-wrapper']}
              imgClasses={scss.image}
            />
            <FillImage
              alt='Customer photo'
              src='/images/landing-page/about-section/small-3.jpg'
              sizes='15vw'
              quality={90}
              wrapperClasses={scss['image-wrapper']}
              imgClasses={scss.image}
            />
            <FillImage
              alt='Customer photo'
              src='/images/landing-page/about-section/large-4.jpg'
              sizes='15vw'
              quality={90}
              wrapperClasses={scss['image-wrapper']}
              imgClasses={scss.image}
            />
          </div>

          <div className={scss.content}>
            <h2 className='secondary-heading'>
              Tìm hiểu thêm <br /> về chúng tôi
            </h2>
            <p>
              Những món ăn của chúng tôi là sự kết hợp của 2 yếu tố
              chính là nguồn gốc tự nhiên (Nature) và dồi dào dinh
              dưỡng (Nutrients). Naturents trong suốt những năm qua
              luôn không ngừng cải tiến và phát triển để đem đến cho
              khách hàng những trải nghiệm tuyệt vời nhất, vì ẩm thực
              không chỉ đơn giản là ngon miệng, mà phải đảm tốt cho
              sức khoẻ và dồi dào dinh dưỡng.
            </p>
            <p>
              Để thực hiện được sứ mệnh này, nguyên liệu được nhà hàng
              sử dụng đều là hữu cơ, nghĩa là hoàn toàn không có hoàn
              toàn không chứa hoá chất bảo quản, thuốc kích thích tăng
              trưởng,... Tất cả chúng đều được cung cấp bởi những bên
              có uy tín, vượt qua khâu kiểm định của các đầu bếp
              chuyên nghiệp trước khi được đem đi chế biến cho khách
              hàng.
            </p>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
