import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import { UserState } from "../type";

const Avatar = ({ user }: { user: UserState | null }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const onLogout = async () => {
    await axios.get("/api/auth/logout");
    dispatch(logout());
    router.push("/login");
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer"
      >
        <div className="w-10 h-10 relative">
          <Image
            className="rounded-full object-cover"
            src={
              "https://res.cloudinary.com/dn6uglajh/image/upload/v1733990935/blank-image_yfczs3.jpg"
            }
            alt={user?.name || "author"}
            fill
            priority
          />
        </div>
        <div className="flex-1 min-w-0 ms-2 max-sm:hidden">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user?.name}
          </p>
          <p className="text-sm truncate">{user?.email}</p>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={() => router.push("/dashboard")}
                className="block w-full px-4 py-2 text
                text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer"
              >
                Create Blog
              </button>
            </li>
            <li>
              <button
                onClick={onLogout}
                className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-600 dark:text-red-400"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
