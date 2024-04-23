"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import userData from "@/util/user";
import React, { useEffect, useState } from "react";
import { User } from "@/interfaces/user.interface";
import usePermission from "@/hooks/hasPermission";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const hasPermission = usePermission();
  const router = useRouter();
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

  useEffect(() => {
    if (hasPermission("view_profile") !== null) {
      router.push("/");
    }
  }, []);

  return (
    <div className="h-screen w-full bg-slate-100 rounded-l-3xl mt-4">
      <div className="p-4">
        <div className="border-b-2 border-gray-200 pb-5">
          <h1 className="text-2xl text-gray-600 font-bold mb-1">Profile</h1>
          <p className="text-sm text-gray-400">
            Update your photo and personal details here.
          </p>
        </div>
        <div className=" border-b-2 border-gray-200">
          <div className="py-10 flex justify-between max-w-[800px]">
            <Label htmlFor="username" className="font-bold text-gray-700">
              Username
            </Label>
            <div>
              <Input type="text" id="username" value={user?.username} />
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-gray-200">
          <div className="py-10 flex justify-between max-w-[800px]">
            <Label htmlFor="email" className="font-bold text-gray-700">
              Email
            </Label>
            <div>
              <Input type="text" id="email" value={user?.email} />
            </div>
          </div>
        </div>
        <div className=" border-b-2 border-gray-200">
          <div className="py-10 flex justify-between max-w-[800px]">
            <Label
              htmlFor="AlternativeEmail"
              className="font-bold text-gray-700"
            >
              Alternative Email
            </Label>
            <div>
              <Input type="text" id="uAlternativeEmail" />
            </div>
          </div>
        </div>

        <div className=" border-b-2 border-gray-200">
          <div className="py-10 flex justify-between max-w-[800px]">
            <Label
              htmlFor="AlternativeEmail"
              className="font-bold text-gray-700"
            >
              Your Photo
            </Label>
            <img
              className="rounded-full w-12 h-12 object-cover"
              src={user?.profilePicture}
              alt={user?.fullName}
            />
            <div className="flex gap-4">
              <p className="text-gray-400 text-sm font-bold cursor-pointer">
                Delete
              </p>
              <p className="text-primary text-sm font-bold cursor-pointer">
                Update
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
