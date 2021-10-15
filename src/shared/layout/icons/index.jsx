import React from 'react';
import './material-icon.less';

export const Icons = (props) => {
  return (
    <i {...props} className={`icons ${props.name}`}></i>
  )
}