import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { scrollIntoId } from '../../../../../helpers/frontend-helpers/dom-helper';
import FilledIconButton from '../../../ui/common/buttons/icon-button/icon-button-filled';
import scss from './scroll-top-button.module.scss';

function ScrollTopButton({ isVisible, nodeRef }) {
  const [buttonIsVisible, setButtonIsVisible] = useState(isVisible);

  useEffect(() => {
    setButtonIsVisible(isVisible);
  }, [isVisible]);

  //Phải có sự thay đổi trong property 'in' thì CSS transition mới bắt đầu chạy
  //Nên cho dù lúc đầu in = false nhưng do đó là lần đầu, chưa có sự thay đổi, nên ko chạy
  useEffect(() => {
    setButtonIsVisible(true);
    setTimeout(() => setButtonIsVisible(false), 100);
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={buttonIsVisible}
      timeout={0}
      classNames={{
        exitDone: scss.hidden
      }}>
      <div ref={nodeRef} className={scss['scroll-top-wrapper']}>
        <FilledIconButton
          tabIndex={-1}
          tooltip='Về đầu trang'
          onClick={(event) => scrollIntoId(event, 'portal', 'start')}
          className={scss['scroll-top']}>
          <KeyboardArrowUpIcon />
        </FilledIconButton>
      </div>
    </CSSTransition>
  );
}

export default ScrollTopButton;
