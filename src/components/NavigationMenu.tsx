import Link from "next/link";
import React from "react";

const listItems=[
    {
        href:"/",
        id:"Home"
    },
    {
        href:"/careers",
        id:"Careers"
    },
    {
        href:"/about-us",
        id:"About Us"
    },
    {
        href:"/contat-us",
        id:"Contact Us"
    }
]

const NavigationMenu = () => {
  return (
    <nav className="flex items-center list-none h-full">
        {listItems.map((item,index)=>(
            <li key={index} className="py-4 px-3 hover:bg-primary/10 transition duration-200 ease-in-out">
                <Link href={item.href}>{item.id}</Link>
            </li>
        ))}
    </nav>
  );
};

export default NavigationMenu;
