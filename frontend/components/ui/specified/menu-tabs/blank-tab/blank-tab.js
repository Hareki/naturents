import FillImage from '../../../common/image/fill-image';
import scss from './blank-tab.module.scss';
function BlankTab(props) {
  return (
    <div className={scss['blank-tab']}>
      <FillImage
        wrapperClasses={scss['wrapper']}
        src='/images/landing-page/menu-section/spoon-and-fork.svg'
      />
      <p>Danh mục này hiện đang tạm trống</p>
    </div>
  );
}

export default BlankTab;
