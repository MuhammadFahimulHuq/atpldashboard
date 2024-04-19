import React from 'react'
import SidebarLink from '../ui/sidebarLink'
import { AlignCenterVertical, LayoutDashboard, ShoppingCart, Users } from 'lucide-react';
const Sidebar = () => {
  return (
    <div className='h-screen'>
        <div className='px-4'>
        <img src="/atpl_logo.png" className='w-[100px]' alt="logo" />
        <h1 className='text-2xl font-md mb-3'>Welcome Back, User</h1>
        </div>
        <div className='bg-slate-100 py-9 rounded-r-2xl'>
        <SidebarLink title={'dashboard'} icon={<LayoutDashboard />} path={'/dashboard'}/>
        <SidebarLink title={'product'} icon={<ShoppingCart />} path={'/product'}/>
        <SidebarLink title={'users-list'} icon={<Users />} path={'/users'}/>
      
     
        </div>
   
    </div>
  )
}

export default Sidebar