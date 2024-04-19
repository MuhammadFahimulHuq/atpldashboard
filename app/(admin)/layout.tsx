
import Sidebar from '@/components/sidebar/sidebar';
import Topbar from '@/components/ui/topbar';
import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='h-screen flex'>
        <div className='w-[250px]'>
         <Sidebar />
        </div>
    <div className='w-full pt-4 px-4'>
        <Topbar />
             {children}
        </div>
   
    </div>
  );
}

export default Layout;
