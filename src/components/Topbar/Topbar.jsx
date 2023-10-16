import React, { useState } from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import MenuIcon from "./MenuIcon";

import {
  IconUserCircle
} from "@tabler/icons-react";
import "./Topbar.scss";

import { white } from "../../styles/colors.module.scss";

export default (props) => {
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(() => !visibility)

  return (
    <header className="header header__topbar">
      <nav className={`header__content ${(visibility) ? "visible": ""}`}>
        <HeaderLinkList links={props.links} active={props.active}
          handler={props.handler}/>
      </nav>

      <nav className="header__base">
        <MenuIcon mode={visibility} callback={handleVisibility} />
        <div className="header__logo-container">
          {props.children}
        </div>
        {/* <div className="header__user-icon">
          <IconUserCircle
            size={25}
            stroke={1}
            color={white}
          />
        </div> */}
      </nav>
    </header>
  );
}