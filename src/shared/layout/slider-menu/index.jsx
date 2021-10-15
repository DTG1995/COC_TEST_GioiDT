import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './slider-menu.less';

export const SliderMenu = (props) => {
  const [activeKey, setActiveKey] = useState('users');
  const listMenu = [
    {
      key:'users',
      title: 'Users',
      href: '/users'
    },{
      key: 'collectiables',
      title: 'Collectibles',
      href: '/collectiables'
    },{
      key: 'categories',
      title: 'Categories',
      href: '/categories'
    },{
      key: 'configurations',
      title: 'Configurations',
      href: '/configurations'
    }
  ];
  const onClickMenu = (item) => {
    updateTitle(item);
  }

  const updateTitle = (item) => {
    setActiveKey(item.key);
    if(props.onChange) {
      props.onChange(item);
    }
  }
  useEffect(()=> {
    updateTitle(listMenu[0])
  }, []);
  return (
    <div className="slider-menu">
      {
        listMenu.map(item => (
          <div key={item.key} className={`menu-item ${item.key === activeKey? 'active' : ''}`}>
            <Link to={item.href} onClick={() => onClickMenu(item)}>{item.title}</Link>
          </div>
        ))
      }
    </div>
  )
}