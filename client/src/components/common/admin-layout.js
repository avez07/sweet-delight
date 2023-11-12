import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AdminHeader from './admin-header';
import Sidebar from './admin-sidebar';
import '../../style.css';
import '../../Layout.css';

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [boxDataWidth, setBoxDataWidth] = useState('calc(100% - 240px)');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setBoxDataWidth(isSidebarOpen ? 'calc(100% - 55px)' : 'calc(100% - 240px)');
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <Container fluid className={`p-0 ${!isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="box-data" style={{ width: boxDataWidth }}>
          <AdminHeader toggleSidebar={toggleSidebar} />
          <div className="content">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Layout;
