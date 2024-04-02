import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";
import Nav from "@/components/UI/Nav/nav";

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-[1440px] w-[90%] m-auto py-[30px]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
