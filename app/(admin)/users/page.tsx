"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserData from "@/util/user";
import { User } from "@/interfaces/user.interface";
import { Badge } from "@/components/ui/badge";
import usePermission from "@/hooks/hasPermission";
import { useRouter } from "next/router";
const UserListPage = () => {
  const { User: UsersList } = UserData;
  const hasPermission = usePermission();
  const router = useRouter();
  useEffect(() => {
    if (hasPermission("view_userlist") !== null) {
      router.push("/");
    }
  }, []);

  return (
    <div className="h-screen w-full bg-slate-100 rounded-l-3xl mt-4">
      <div className="p-4">
        <div className="border-b-2 border-gray-200 pb-5">
          <h1 className="text-2xl text-gray-600 font-bold mb-1">Users List</h1>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Role</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead className="text-right font-bold">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {UsersList.map((user: User) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium flex items-center gap-3">
                    <img
                      src={user.profilePicture}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    {user.fullName}
                  </TableCell>
                  <TableCell>{user.role.name}</TableCell>
                  <TableCell>
                    <Badge>{user.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {user.registeredAt.toISOString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserListPage;
