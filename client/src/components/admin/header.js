import React from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = ({ toggleMenu }) => (
  <ProSidebar>
    <div className="card profile-card">
      <div className="card-body">
        <h4 className="card-title">John Smith</h4>
        <h6 className="card-subtitle mb-3 text-muted">Administrator</h6>
        <NavLink to="/" onClick={toggleMenu} className="card-link">
          Profile
        </NavLink>
        <NavLink to="/" onClick={toggleMenu} className="card-link">
          Logout
        </NavLink>
      </div>
    </div>

    <Menu iconShape="square">
      <MenuItem>
        <NavLink to="/sample" onClick={toggleMenu}>
          Sample Page
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/" onClick={toggleMenu}>
          Page 1
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/" onClick={toggleMenu}>
          Page 2
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/" onClick={toggleMenu}>
          Page 3
        </NavLink>
      </MenuItem>
    </Menu>
  </ProSidebar>
);

export default Sidebar;

