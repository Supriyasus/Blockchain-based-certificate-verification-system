import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'My Homepage', path: '/' },
    { name: 'Module View', path: '/module-view' },
    { name: 'Courses', path: '/courses' },
    { name: 'Daily Goal', path: '/daily-goal' },
    { name: 'Live Classes', path: '/live-classes' },
    { name: 'Subscription Plans', path: '/subscription-plans' },
    { name: 'Talk to us', path: '/talk-to-us' },
    { name: 'My Profile', path: '/my-profile' },
    { name: 'Meet a Mentor', path: '/meet-a-mentor', isNew: true },
    { name: 'Need Help?', path: '/need-help' },
    { name: 'Logout', path: '/logout' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-6 mt-4">
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex items-center p-2 cursor-pointer ${
              location.pathname === item.path ? 'text-purple-600 font-semibold' : 'text-gray-800'
            } hover:text-purple-600`}
          >
            {item.name}
            {item.isNew && (
              <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
