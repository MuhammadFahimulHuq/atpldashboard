'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
    title: string;
    icon: React.ReactNode;
    path: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, icon, path }) => {
    const currentPath = usePathname(); 
    return (
        <Link href={path} className={`${currentPath === path ? 'text-primary'  : ''} flex capitalize px-4 items-center gap-3 font-medium py-4  rounded-lg`}>
            {icon}
            {title}
        </Link>
    );
}

export default SidebarLink;
