import React from "react";
import { NavLink } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


const Sidebar = () => (
  <>
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem>
          <NavLink to="/sample">Sample Page</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/">Page 1</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/">Page 2</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/">Page 3</NavLink>
        </MenuItem>
      </Menu>
    </ProSidebar>
  </>
);

export default Sidebar;
