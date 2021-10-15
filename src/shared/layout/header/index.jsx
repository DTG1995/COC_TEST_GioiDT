import React from "react";
import { Icons } from "../icons";
import './header.less';


const AppHeader = () => {

  return (
    <div className="layout-header">
      <div className="header-logo">
        <img src="/assets/imgs/concrete-logo.png"/>
      </div>
      <div className="user-info">
        <Icons name="account"/>
      </div>
    </div>
  )
}
export default AppHeader;