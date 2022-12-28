import CopyrightIcon from '@mui/icons-material/Copyright';
import EmailIcon from '@mui/icons-material/Email';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Fragment } from 'react';
import FillImage from '../../../ui/common/image/fill-image';
import scss from './app-footer.module.scss';

function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <footer id='footer' className={scss.footer}>
        <div className={scss['area-1']}>
          <div className={scss['contact-info']}>
            <h3 className='tertiary-heading'>
              Liên hệ với chúng tôi
            </h3>

            <div href='/' className={scss['logo-wrapper']}>
              <FillImage
                src='/logo/logo.svg'
                alt='Naturents logo'
                width='7.5rem'
                height='7.5rem'
              />
              <p>Naturents</p>
            </div>

            <div className={scss.media}>
              <a target='blank' href='https://www.instagram.com'>
                <InstagramIcon />
              </a>
              <a target='blank' href='https://www.facebook.com'>
                <FacebookOutlinedIcon />
              </a>
              <a target='blank' href='https://www.twitter.com'>
                <TwitterIcon />
              </a>
            </div>
            <div className={scss['address-phone']}>
              <p className={scss['info-text']}>
                <LocationOnIcon />
                97 Man Thiện, Phường Hiệp Phú, Thủ Đức, TP. Hồ Chí
                Minh
              </p>
              <a href='tel:0338758008' className={scss['info-text']}>
                <LocalPhoneIcon />
                033 875 8008
              </a>
              <a
                href='mailto:n18dccn192@student.ptithcm.edu.vn'
                className={scss['info-text']}>
                <EmailIcon />
                n18dccn192@student.ptithcm.edu.vn
              </a>
            </div>
            <p className={scss['copyright']}>
              <CopyrightIcon /> {currentYear} Bản quyền thuộc Công ty
              TNHH Naturents. Tất cả các quyền được bảo lưu
            </p>
          </div>
        </div>
        <div className={scss['area-2']}>
          <h3 className='tertiary-heading'>Giờ hoạt động</h3>
          <div className={scss['opening-hours']}>
            <div className={scss['opening-hour']}>
              <p>Thứ 2</p>
              <p>8:00 - 22:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Thứ 3</p>
              <p>8:00 - 22:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Thứ 4</p>
              <p>8:00 - 22:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Thứ 5</p>
              <p>8:00 - 22:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Thứ 6</p>
              <p>7:00 - 23:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Thứ 7</p>
              <p>7:00 - 23:00</p>
            </div>
            <div className={scss['opening-hour']}>
              <p>Chủ nhật</p>
              <p>7:00 - 23:00</p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default AppFooter;
