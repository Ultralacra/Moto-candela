import React from "react";
import HeaderLinkList from "../Header/HeaderLinkList";
import { IconUserCircle } from "@tabler/icons-react";
import { white } from "../../styles/colors.module.scss";
import "./Navbar.scss";

export default (props) => {
    return (
      <header className="header header__navbar">
          <nav className="header__content">
            {props.children}
            <div className="header__left-side">
              <HeaderLinkList links={props.links} active={props.active}
                handler={props.handler}/>
              {/* <IconUserCircle
                className="header__user-icon"
                size={45}
                stroke={1}
                color={white}
              /> */}
            </div>
          </nav>
      </header>
    );
}