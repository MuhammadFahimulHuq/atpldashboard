"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, icon, path }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`${
        currentPath === path ? "text-primary  bg-blue-100 font-semibold" : ""
      } flex capitalize px-4 items-center gap-2 font-medium py-2 rounded-md`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default SidebarLink;
