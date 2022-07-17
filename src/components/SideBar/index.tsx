import * as React from 'react';

// Utils
import useOutsideClick from 'src/hooks/useClickOutside';
import cx from 'classnames';

import style from './style.module.scss';

interface OwnProps {
  isToggled: boolean;
  onMainContentClick: () => void;
  sidebarContent: React.ReactNode;
}

const SideBar = ({ isToggled, onMainContentClick, sidebarContent }: OwnProps) => {
  const handleClickOutside = () => {
    console.log('clicked outside!');
    onMainContentClick();
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div ref={ref} className={cx(style.sideMenuContainer, isToggled ? style.slideIn : '')}>
      {sidebarContent}
    </div>
  );
};

export default SideBar;
