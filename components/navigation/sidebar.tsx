import React from "react";
import SidebarLink from "../ui/sidebarLink";
import {
  AlignCenterVertical,
  LayoutDashboard,
  ShoppingCart,
  Users,
} from "lucide-react";
import NavigationContent from "./content";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:block h-screen bg-blue-100 pr-4">
        <NavigationContent />
      </div>
    </>
  );
};

export default Sidebar;
