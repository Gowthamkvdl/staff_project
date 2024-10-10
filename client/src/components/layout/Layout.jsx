import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="mt-md-5"></div>
      <Outlet />
      <div className="mb-5 pb-4"></div>
    </div>
  );
}

export default Layout
