import React from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import logo from "../assets/wesite-logo.png";

import { FaHome,FaBoxOpen,FaCartPlus,FaUserFriends } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";


const Sidebar = ({ isOpen }) => {

  return (
    <>
      <ProSidebar collapsed={!isOpen}>
    <div className="mt-4"><img src={logo} alt="website-logo" className="website-logo" /><span className="website-name">Sweet delight</span></div>
        <Menu iconShape="square">
          <MenuItem>
            <NavLink to="/sample"><span className="menu-items"><FaHome/></span> Home</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/"><span className="menu-items"><FaBoxOpen/></span>Product Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/"><span className="menu-items"><FaCartPlus/></span>Order Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/"><span className="menu-items"><FaUserFriends/></span>Seller Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/"><span className="menu-items"><RiFilePaper2Fill/></span>Billing</NavLink>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </>
  );
};

export default Sidebar;
