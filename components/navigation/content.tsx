"use client";
import { CircleUser, LayoutDashboard, ShoppingCart, Users } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import SidebarLink from "../ui/sidebarLink";
import userData from "@/util/user";
import { User as UserInterface } from "@/interfaces/user.interface";
import usePermission from "@/hooks/hasPermission";

const NavigationContent = () => {
  const [userName, setUserName] = useState<string>("");

  const hasPermission = usePermission();

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName) {
      setUserName(userName);
    }
  }, []);

  return (
    <>
      <div className="px-4">
        <img src="/atpl_logo.png" className="w-[100px]" alt="logo" />
        <h1 className="text-2xl font-md mb-3">
          Welcome Back, {userName ? userName : "guest"}
        </h1>
      </div>
      <div>
        <div className="bg-slate-100 h-[600px] rounded-r-2xl px-2 py-4 space-y-3">
          {hasPermission("view_dashboard") && (
            <SidebarLink
              title={"dashboard"}
              icon={<LayoutDashboard className="w-5" />}
              path={"/dashboard"}
            />
          )}
          {hasPermission("view_product") && (
            <SidebarLink
              title={"products"}
              icon={<ShoppingCart className="w-5" />}
              path={"/product"}
            />
          )}
          {hasPermission("view_profile") && (
            <SidebarLink
              title={"profile"}
              icon={<CircleUser className="w-5" />}
              path={"/profile"}
            />
          )}
          {hasPermission("view_userlist") && (
            <SidebarLink
              title={"users list"}
              icon={<Users className="w-5" />}
              path={"/users"}
            />
          )}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NavigationContent;
