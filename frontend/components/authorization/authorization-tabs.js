import CloseIcon from '@mui/icons-material/Close';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import concat from 'classnames';
import { useRef, useState } from 'react';
import {
  CSSTransition,
  SwitchTransition
} from 'react-transition-group';
import OutlinedIconButton from '../ui/common/buttons/icon-button/icon-button-outlined';
import TextButton from '../ui/common/buttons/text-button/text-button';
import scss from './authorization-tabs.module.scss';
import SignInPanel from './sign-in-panel';
import SignUpPanel from './sign-up-panel';

const FadeTransition = ({ children, nodeRef, ...props }) => (
  <CSSTransition
    nodeRef={nodeRef}
    {...props}
    classNames={{
      enter: scss['panel-enter'],
      enterActive: scss['panel-enter-active'],
      enterDone: scss['panel-enter-done'],
      exit: scss['panel-exit'],
      exitActive: scss['panel-exit-active']
    }}
    addEndListener={(done) => {
      nodeRef.current.addEventListener('transitionend', done, false);
    }}>
    {children}
  </CSSTransition>
);

function AuthorizationTabs({ classNames, onClose }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const signInRef = useRef();
  const signUpRef = useRef();
  const nodeRef = activeTabIndex === 0 ? signInRef : signUpRef;

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };
  const { tabsListClassName, tabPanelsClassName } = classNames;

  const tabLinkInfos = [
    {
      name: 'Đăng nhập',
      icon: <LockOpenIcon />
    },
    {
      name: 'Đăng ký',
      icon: <PersonIcon />
    }
  ];
  const tabLinkJSX = tabLinkInfos.map((info, index) => (
    <TextButton
      key={index}
      className={concat(
        scss['tab-link'],
        activeTabIndex === index ? scss['tab-link--active'] : ''
      )}
      onClick={() => {
        onTabClick(index);
      }}
      role='tab'>
      {info.icon}
      {info.name}
    </TextButton>
  ));

  return (
    <div className={scss.tabs}>
      <div
        className={concat(scss['tab-links'], tabsListClassName)}
        role='tablist'>
        {tabLinkJSX}

        <OutlinedIconButton
          className={scss['close-button']}
          onClick={onClose}>
          <CloseIcon />
        </OutlinedIconButton>
      </div>
      <div className={concat(scss['tab-panels'], tabPanelsClassName)}>
        <SwitchTransition mode='out-in'>
          {/* Key matters */}
          <FadeTransition
            key={activeTabIndex === 0 ? '1' : '2'}
            nodeRef={nodeRef}>
            <div className={scss['tab-panel']} ref={nodeRef}>
              {activeTabIndex === 0 ? (
                <div className={scss['sign-in-wrapper']}>
                  <SignInPanel />
                </div>
              ) : (
                <div className={scss['sign-up-wrapper']}>
                  <SignUpPanel />
                </div>
              )}
            </div>
          </FadeTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default AuthorizationTabs;
