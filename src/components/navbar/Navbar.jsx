"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "About",
    url: "/about",
  },

  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },

  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <div className="h-24 flex justify-between items-center">
      <Link className="font-bold text-xl" href="/">
        Donate With B
      </Link>
      <div className="flex">
        <DarkModeToggle className="mr-3" />
        {links.map((links) => (
          <Link key={links.id} href={links.url} className="items-center mx-3">
            {links.title}
          </Link>
        ))}
        
          <button
          className=" px-3 bg-green-500 hover:bg-green-600 border-none cursor-pointer text-white rounded"
          onClick={signOut}>
          Logout
        </button>
      
        
      </div>
    </div>
  );
};

export default Navbar;
