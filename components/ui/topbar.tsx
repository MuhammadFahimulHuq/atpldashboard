"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import ResponsiveNavbar from "../navigation/responsiveNavbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import userData from "@/util/user";
import { User } from "@/interfaces/user.interface";
const Topbar = () => {
  const currentPath = usePathname();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/");
  };

  const [user, setUser] = useState<User | null>(null);

  const findUser = () => {
    const username = localStorage.getItem("username");
    const foundUser = userData.User.find((user) => user.username === username);
    if (foundUser) {
      setUser(foundUser);
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <div className="flex justify-between w-full">
      <ResponsiveNavbar />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={currentPath} className="capitalize">
              {currentPath.replace("/", "")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>View</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.profilePicture} className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="hover:bg-blue-100 ">
            <Link href={"/profile"}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:bg-blue-100"
            onClick={handleLogout}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Topbar;
