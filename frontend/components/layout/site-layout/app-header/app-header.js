import LoginIcon from '@mui/icons-material/Login';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import concat from 'classnames';
import Link from 'next/link';
import { cloneElement, Fragment, useRef, useState } from 'react';
import AuthorizationTabs from '../../../authorization/authorization-tabs';
import PrimaryButton from '../../../ui/common/buttons/primary-button/primary-button';
import TextButton from '../../../ui/common/buttons/text-button/text-button';
import FillImage from '../../../ui/common/image/fill-image';
import Modal from '../../../ui/common/modal/modal';
import CartButton from '../../../ui/specified/cart-button/cart-button';
import ScrollTopButton from '../scroll-top-button/scroll-top-button';
import scss from './app-header.module.scss';

function ScrollDetector(props) {
  const scrollTopButtonRef = useRef();
  const { children, window } = props;
  const scrolledDown = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: window ? window() : undefined
  });

  let headerCSS = `${scss.header}`;

  if (scrolledDown) {
    headerCSS = concat(headerCSS, scss['header--sticky']);
  }

  return (
    <Fragment>
      {cloneElement(children, { className: headerCSS })}
      <ScrollTopButton
        isVisible={scrolledDown}
        nodeRef={scrollTopButtonRef}
      />
    </Fragment>
  );
}

export default function AppHeader(props) {
  const [loginIsVisible, setLoginIsVisible] = useState(false);

  function loginClickHandler() {
    setLoginIsVisible(true);
  }

  function closeHandler() {
    setLoginIsVisible(false);
  }
  return (
    <Fragment>
      <ScrollDetector {...props}>
        <header className={scss.header}>
          <div className={scss.container}>
            <nav className={scss.navigation}>
              <ul>
                <li>
                  <Link href='/' className={scss['logo-wrapper']}>
                    <FillImage
                      src='/logo/logo.svg'
                      alt='Naturents logo'
                      width='5.2rem'
                      height='5.2rem'
                    />
                    <p>Naturents</p>
                  </Link>
                </li>
                <li>
                  <PrimaryButton
                    href='/menu/appetizers'
                    className={scss['cta-button']}>
                    Chọn món ngay
                  </PrimaryButton>
                </li>
              </ul>
            </nav>
            <div className={scss['right-buttons']}>
              {/* CategoryOutlinedIcon       Quản lý
                  PersonOutlineOutlinedIcon  Tài khoản */}
              <TextButton
                className={scss.account}
                onClick={loginClickHandler}>
                <LoginIcon /> Đăng nhập / Đăng ký
              </TextButton>
              <CartButton />
            </div>
          </div>
        </header>
      </ScrollDetector>
      <Modal visible={loginIsVisible} onClose={closeHandler}>
        <AuthorizationTabs onClose={closeHandler} classNames={{}} />
      </Modal>
    </Fragment>
  );
}
