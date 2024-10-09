import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaClipboard, FaUserCheck, FaCog } from 'react-icons/fa';
import Team from '../Pages/Team';
import Post from '../Pages/Post';
import CandidateInfo from '../Pages/CandidateInfo';
import AdminPanel from '../Pages/AdminPanel';
import imges from '../Assets/careers1.jpg';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Team');
  const [pageVisible, setPageVisible] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLinkClick = (page) => {
    if (currentPage === page && pageVisible) {
      setPageVisible(false);
    } else {
      setCurrentPage(page);
      setPageVisible(true);
    }
  };

  const renderPageContent = () => {
    if (!pageVisible) return null;
    switch (currentPage) {
      case 'Team':
        return <Team />;
      case 'Post':
        return <Post />;
      case 'CandidateInfo':
        return <CandidateInfo />;
      case 'AdminPanel':
        return <AdminPanel />;
      default:
        return <div>Please select a page from the sidebar.</div>;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'Team':
        return 'Team';
      case 'Post':
        return 'Post';
      case 'CandidateInfo':
        return 'Applied Candidate';
      case 'AdminPanel':
        return 'Admin Panel';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } bg-gray-800 text-white h-full fixed lg:static`}
      >
        <div className="p-4 border-b bg-gray-800 flex justify-between items-center"> {/* Changed to blue */}
          <h2 className={`text-lg font-semibold ${sidebarCollapsed ? 'hidden' : 'block'}`}>Dashboard</h2>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white p-1.5 rounded focus:outline-none lg:hidden"
          >
            <div className="flex flex-col items-center">
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </div>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {[
              { name: 'Team', icon: <FaUsers /> },
              { name: 'Post', icon: <FaClipboard /> },
              { name: 'CandidateInfo', icon: <FaUserCheck /> },
              { name: 'AdminPanel', icon: <FaCog /> },
            ].map(({ name, icon }) => (
              <li
                key={name}
                className={`py-2 px-4 rounded flex items-center ${
                  currentPage === name ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              >
                <Link to="#" onClick={() => handleLinkClick(name)} className="flex items-center w-full">
                  <span className="mr-2">{icon}</span>
                  {/* Show the name only if the sidebar is not collapsed */}
                  {!sidebarCollapsed && name.replace('CandidateInfo', 'Candidate Information').replace('AdminPanel', 'Admin Panel')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`flex-1 flex flex-col ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
        <div className="flex justify-between items-center text-right bg-gray-800 text-white p-4 border-b border-blue-500"> {/* Changed to blue */}
          <h2 className="text-lg font-semibold text-center">John David</h2>
          <img
            src={imges}
            alt="Profile"
            className="w-8 h-8 rounded-full border"
          />
        </div>

        <div className="flex-1 p-6 overflow-auto">
          <header className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
            <h1 className="text-2xl font-bold">{getPageTitle()}</h1>
          </header>

          <div
            className={`bg-white p-4 rounded shadow transition-all duration-500 ${
              pageVisible ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          >
            {renderPageContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
