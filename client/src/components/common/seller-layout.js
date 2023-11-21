import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Sidebar from './seller-sidebar';
import AdminNav from './seller-header'
import '../../../src/css/style.css';
import '../../../src/css/Layout.css';

function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [boxDataWidth, setBoxDataWidth] = useState('calc(100% - 240px)');
  const [isNightMode, setisNightMode] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setBoxDataWidth(isSidebarOpen ? 'calc(100% - 55px)' : 'calc(100% - 240px)');
  };
  const NightMode=()=>{
setisNightMode(!isNightMode)
  }

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} isNightMode={isNightMode}/>
      <Container fluid className={`p-0 ${!isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className={`box-data ${isNightMode?'night-mode':''}`} style={{ width: boxDataWidth }}>
          <AdminNav toggleSidebar={toggleSidebar} toggleNightMode={NightMode} isNightMode={isNightMode}/>
          <div className={`content ${isNightMode?'content-night':''}`}>
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Layout;
