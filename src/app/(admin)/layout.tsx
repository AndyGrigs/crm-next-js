import React from 'react'
import Sidebar from '../components/sidebar';

export interface LayoutProps { 
    children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
        <Sidebar />
        <div   className="ml-60">{children}</div>
    </>
  )
}



export default Layout