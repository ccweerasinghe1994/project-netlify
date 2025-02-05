"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const path = usePathname();

  return (
    <nav className="flex gap-4 px-4 text-xl py-3 font-bold border-b-2 border-red-200 ">
      <Link
        className={`hover:underline ${path === "/" ? "text-blue-600" : ""}`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={`${path === "/post" && "text-blue-600 "} hover:underline`}
        href={"/post"}
      >
        posts
      </Link>
    </nav>
  );
}
