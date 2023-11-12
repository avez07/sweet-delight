import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AuthContext } from "../authentication/auth";
import logo from "../assets/wesite-logo.png";

import { FaHome } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  const { name } = useContext(AuthContext);

  return (
    <>
      <ProSidebar collapsed={!isOpen}>
    <div className="mt-4"><img src={logo} alt="website-logo" className="website-logo" /><span className="website-name">Sweet delight</span></div>
        <Menu iconShape="square">
          <MenuItem>
            <NavLink to="/sample"><span className="menu-items"><FaHome/></span> Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">Product Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">Order Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">Seller Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/">Billing</NavLink>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
