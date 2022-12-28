import concat from 'classnames';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function getTabLinksJSX(scss, tabNames, activeTabIndex, onTabClick) {
  return tabNames.map((name, index) => (
    <button
      key={index}
      className={concat(
        scss['tab-link'],
        activeTabIndex === index ? scss['tab-link--active'] : ''
      )}
      onClick={() => onTabClick(index)}
      role='tab'>
      {name}
    </button>
  ));
}

function getTabPanelsJSX(scss, tabContents, activeTabIndex) {
  return tabContents.map((content, index) => (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      key={index}
      in={activeTabIndex === index}
      timeout={250}
      classNames={{
        enter: scss['panel-enter'],
        enterActive: scss['panel-enter-active'],
        enterDone: scss['panel-enter-done'],
        exit: scss['panel-exit'],
        exitActive: scss['panel-exit-active'],
        exitDone: scss['panel-exit-done']
      }}>
      <div role='tabpanel' key={index} className={scss['tab-panel']}>
        {content}
      </div>
    </CSSTransition>
  ));
}

function useTabs({ scss, tabNames, tabContents, defaultValue }) {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultValue);
  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const tabLinksJSX = getTabLinksJSX(
    scss,
    tabNames,
    activeTabIndex,
    onTabClick
  );
  const tabPanelsJSX = getTabPanelsJSX(
    scss,
    tabContents,
    activeTabIndex
  );

  return { tabLinksJSX, tabPanelsJSX };
}

export default useTabs;
