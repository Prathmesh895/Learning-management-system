// src/components/adminDashboard/CourseformNav.js
import React from 'react';

const NavItem = ({ isActive, onClick, children }) => {
  const activeClass = 'text-white bg-violet-500 cursor-pointer ';
  const defaultClass = 'text-black bg-transparent cursor-pointer ';

  return (
    <div
      onClick={onClick}
      className={isActive ? activeClass : defaultClass}
    >
      {children}
    </div>
  );
};

export default NavItem;
