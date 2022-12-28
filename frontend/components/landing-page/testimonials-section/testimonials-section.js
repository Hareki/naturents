import { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import CommonCard from '../../ui/common/card/common-card';
import FillImage from '../../ui/common/image/fill-image';
import scss from './testimonials-section.module.scss';

const testimonialData = [
  {
    name: 'Eva Morales',
    quote:
      'Giá không đắt so với thực phẩm thông thường mà lại rất ngon miệng và yên tâm về sức khoẻ!'
  },
  {
    name: 'Shannon Terry',
    quote:
      'Chất lượng của nhà hàng rất tốt, thời gian giao hàng nhanh, món ăn lại có hương vị đậm đà và nhiều.'
  },
  {
    name: 'Brent Snyder',
    quote:
      'Giá không đắt so với thực phẩm thông thường mà lại rất ngon miệng và yên tâm về sức khoẻ!'
  },
  {
    name: 'Karl Taylor',
    quote:
      'Giá không đắt so với thực phẩm thông thường mà lại rất ngon miệng và yên tâm về sức khoẻ!'
  }
];

const TestimonialsSection = forwardRef(
  ({ repeat, isInView }, ref) => {
    const nodeRef = useRef();
    const customerSize = '6.4rem';
    const quotesSize = '1.5rem';

    const show = useLPScrollHandler({ isInView, repeat });

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
            <h2 className={`secondary-heading ${scss.heading}`}>
              Khách hàng nghĩ gì?
            </h2>
            <div className={scss.testimonial}>
              {testimonialData.map(({ name, quote }, index) => (
                <CommonCard
                  key={index}
                  variant='figure'
                  className={scss['testimonial-box']}>
                  <FillImage
                    sizes='100px'
                    wrapperClasses={scss['customer-photo']}
                    width={customerSize}
                    height={customerSize}
                    src={`/images/landing-page/testimonials-section/testimonial-customer-${
                      index + 1
                    }.jpg`}
                    alt='Customer photo'
                  />

                  <p className={scss.name}>{name}</p>
                  <blockquote className={scss.content}>
                    {quote}
                  </blockquote>
                  <FillImage
                    wrapperClasses={scss.quotes}
                    width={quotesSize}
                    height={quotesSize}
                    src='/images/landing-page/testimonials-section/quotes.svg'
                    alt='quotes'
                  />
                </CommonCard>
              ))}
            </div>
          </div>
        </CSSTransition>
      </section>
    );
  }
);

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
