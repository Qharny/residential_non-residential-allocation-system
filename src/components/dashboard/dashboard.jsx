import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Footer } from '../common/footer.jsx';
import ResidentialContent from './components/ResidentialContent.jsx';
import { NonResidentialContent } from './components/NonResidentialContent.jsx';
import './Dashboard.css';

const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeContent, setActiveContent] = useState('residential');

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleContentChange = (content) => {
    setActiveContent(content);
  };

   return (
    <div className="dashboard">
      <Header />
      {/* <div className="content-wrapper"> */}
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggle={toggleSidebar}
          onContentChange={handleContentChange}
          activeContent={activeContent}
        />
        <main className="main-content">
          {activeContent === 'residential' ? <ResidentialContent /> : <NonResidentialContent />}
        </main>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Dashboard;