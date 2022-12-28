import CallRoundedIcon from '@mui/icons-material/CallRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import Link from 'next/link';
import CommonCard from '../../frontend/components/ui/common/card/common-card';
import FillImage from '../../frontend/components/ui/common/image/fill-image';
import { scrollIntoId } from '../../helpers/frontend-helpers/dom-helper';
import scss from './index.module.scss';

function PageNotFound(props) {
  return (
    <main>
      <div className={scss.container}>
        <FillImage
          wrapperClasses={scss['image-wrapper']}
          src='/images/404/404.svg'
          fill
          alt='404'
        />
        <div className={scss['main-info']}>
          <h1 className='secondary-heading'>Xảy ra lỗi</h1>
          <p>Trang bạn tìm kiếm không tồn tại hoặc đã bị xoá.</p>
        </div>
        <nav className={scss.navigation}>
          <ul>
            <li>
              <Link href='/' replace className={scss.link}>
                <CommonCard className={scss.card}>
                  <HomeRoundedIcon className={scss['home-icon']} />
                  <div className={scss['card-info']}>
                    <strong>Trang chủ</strong>
                    <p>Trở về trang chủ để tìm hiểu thêm</p>
                  </div>
                </CommonCard>
              </Link>
            </li>
            <li>
              <Link href='#' replace className={scss.link}>
                <CommonCard className={scss.card}>
                  <RestaurantRoundedIcon
                    className={scss['menu-icon']}
                  />
                  <div className={scss['card-info']}>
                    <strong>Thực đơn</strong>
                    <p>Khám phá ngay thực đơn đầy đủ</p>
                  </div>
                </CommonCard>
              </Link>
            </li>
            <li>
              <div
                onClick={(event) =>
                  scrollIntoId(event, 'footer', 'end')
                }
                className={scss.link}>
                <CommonCard className={scss.card}>
                  <CallRoundedIcon className={scss['contact-icon']} />
                  <div className={scss['card-info']}>
                    <strong>Tư vấn</strong>
                    <p>Liên hệ theo thông tin bên dưới</p>
                  </div>
                </CommonCard>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default PageNotFound;
