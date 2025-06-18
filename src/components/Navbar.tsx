import Link from "next/link";
import React from "react";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  return (
    <header className="w-full box-border backdrop-blur-[4px] bg-white/10 sticky top-0 shadow-sm">
      <nav className="w-[70%] mx-auto flex justify-between items-center flex-1">
        <Link href={"/"} className="font-mono font-bold text-xl text-primary">
          SSD Technologies
        </Link>
        <NavigationMenu/>
      </nav>
    </header>
  );
};

export default Navbar;
