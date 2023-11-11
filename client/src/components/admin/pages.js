import React from "react";
import Container from "react-bootstrap/Container";
import AdminHeader from "../common/admin-header";
import Sidebar from "../common/admin-sidebar";
import "../../style.css";

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Container fluid className="p-0">
        <div className="box-data">
          <AdminHeader />
          <div className="content">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Layout;
