import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { AuthContext } from "../authentication/auth";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const { name } = useContext(AuthContext);

  return (
    <>
      <ProSidebar>
    <h3 className="text-capitalize">Hello {name}</h3>
        <Menu iconShape="square">
          <MenuItem>
            <NavLink to="/sample"><FaHome/> Home</NavLink>
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
