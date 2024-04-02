import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "@/assets/images/avatar.svg";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      {router.pathname === "/" && (
        <Link href="/login" className="text-blue">
          Login
        </Link>
      )}
      {router.pathname === "/login" && (
        <Link href="/login" className="text-blue">
          Login
        </Link>
      )}
      {router.pathname === "/welcome" && (
        <div className="flex items-center gap-x-4">
          <Link href="/welcome">Welcome!</Link>
          <Image src={Avatar} alt="img" />
        </div>
      )}
      {router.pathname === "/review" && (
        <div className="flex items-center gap-x-4">
          <Link href="/welcome" className="text-[#101012]">Welcome!</Link>
          <Image src={Avatar} alt="img" />
        </div>
      )}
    </nav>
  );
};

export default Nav;
