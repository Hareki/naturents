import { forwardRef, Fragment, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import useLPScrollHandler from '../../../hooks/use-lp-scroll-handler';
import Accordion from '../../ui/common/accordion/accordion';
import scss from './faq-section.module.scss';

const faqData = [
  {
    question:
      '1. Tôi có thể thay đổi thông tin nhận hàng sau khi đã đặt hàng không?',
    answer: (
      <p>
        Hiện tại hệ thống chưa có tính năng thay đổi thông tin nhận
        hàng trên website. Trong lúc chờ cập nhật, nếu bạn có nhu cầu
        thay đổi thông tin vui lòng liên hệ với chúng tôi qua số điện
        thoại&nbsp;
        <a href='tel:0338758008'>033 875 8008</a> để được hỗ trợ.
      </p>
    )
  },
  {
    question:
      '2. Tôi đã thanh toán qua thẻ rồi nhưng hệ thống vẫn báo đang xử lý?',
    answer: (
      <p>
        Việc xác minh tài khoản có thể tốn một khoảng thời gian, nhưng
        đừng lo, chúng tôi sẽ chuẩn bị đơn hàng ngay cả khi đơn hàng
        chưa được thanh toán. Bạn sẽ được nhân viên giao hàng hỗ trợ
        trong trường hợp nhân viên đến mà đơn hàng vẫn chưa xử lý
        xong.
      </p>
    )
  },
  {
    question: '3. Tôi có thể huỷ đơn hàng không?',
    answer: (
      <Fragment>
        <p>
          Bạn có thể huỷ đơn hàng trong trường hợp đơn hàng vẫn còn
          đang trong trạng thái <strong>Chuẩn bị</strong>, thông
          thường là trong khoảng 3-5p. Sau khi đơn hàng đã chuyển sang
          trạng thái <strong>Đang giao</strong> thì không thể huỷ nữa
        </p>
        <p>Các thao tác để huỷ đơn:</p>
        <ul>
          <li>
            Bước 1: Truy cập vào mục Tài khoản &gt; Quản lý đơn hàng
            &gt; Chọn đơn hàng muốn huỷ
          </li>
          <li>
            Bước 2: Bấm huỷ đơn hàng &gt; Chọn lý do huỷ đơn &gt; Bấm
            đồng ý
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    question:
      '4. Tôi có thể làm gì nếu như thời gian giao hàng quá lâu? (hơn 1 giờ)',
    answer: (
      <Fragment>
        <p>
          Chúng tôi luôn cố gắng chuẩn bị và giao đơn hàng nhanh nhất
          nhằm đảm bảo trải nghiệm của khách hàng. Tuy nhiên, nếu
          trong trường hợp bất khả kháng thì sẽ có các cách giải quyết
          sau:
        </p>
        <ul>
          <li>
            Bạn sẽ được liên hệ lại qua số điện thoại đã cung cấp nếu
            như đơn hàng của bạn gặp trục trặc (không thể giao / giao
            lâu hơn dự kiến)
          </li>
          <li>
            Trong trường hợp không nhận được thông báo do chúng tôi
            nắm được tình trạng (Nhân viên giao hàng gặp vấn đề, hệ
            thống bị lỗi,...), vui lòng liên hệ ngay cho chúng tôi qua
            số điện thoại <a href='tel:0338758008'>033 875 8008</a> để
            có phương án giải quyết và đền bù. Chúng tôi vô cùng xin
            lỗi về sự bất tiện này!
          </li>
        </ul>
      </Fragment>
    )
  }
];
const FAQSection = forwardRef(({ repeat, isInView }, ref) => {
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
          <h2 className={'secondary-heading ' + scss.heading}>
            Các câu hỏi thường gặp
          </h2>
          <div className={scss.questions}>
            {faqData.map(({ answer, question }, index) => (
              <Accordion
                key={index}
                className={scss.accordion}
                summary={question}>
                {answer}
              </Accordion>
            ))}
          </div>
        </div>
      </CSSTransition>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;
