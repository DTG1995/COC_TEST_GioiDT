import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../icons';
import './slider-menu.less';

export const SliderMenu = (props) => {
  const [activeKey, setActiveKey] = useState('users');
  const [collapse, setCollapse] = useState(false);

  const listMenu = [
    {
      key: 'users',
      title: 'Users',
      href: '/users',
      icons: <Icons name="account-group"/>
    },
    {
      key: 'collectiables',
      title: 'Collectibles',
      href: '/collectiables',
      icons: <Icons name="image-album"/>
    },
    {
      key: 'categories',
      title: 'Categories',
      href: '/categories',
      icons: <Icons name="layers"/>
    },
    {
      key: 'configurations',
      title: 'Configurations',
      href: '/configurations',
      icons: <Icons name="config"/>
    },
  ];
  const onClickMenu = (item) => {
    updateTitle(item);
  };

  const updateTitle = (item) => {
    setActiveKey(item.key);
    if (props.onChange) {
      props.onChange(item);
    }
  };
  useEffect(() => {
    updateTitle(listMenu[0]);
  }, []);
  return (
    <div className={`slider-menu ${collapse ? 'collapse' : 'expand'}`}>
      <div className="slider-content">
        {listMenu.map((item) => (
          <div key={item.key} className={`menu-item ${item.key === activeKey ? 'active' : ''}`}>
            <Link to={item.href} onClick={() => onClickMenu(item)}>
              {item.icons}
              {item.title}
            </Link>
          </div>
        ))}
        <div className="area-control-collapse" onClick={() => setCollapse(!collapse)}>
          <div className="customs-collapse"></div>
        </div>
      </div>
    </div>
  );
};
