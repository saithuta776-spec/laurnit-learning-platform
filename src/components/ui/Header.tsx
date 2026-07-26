// import { Link } from "react-router";
// If you don't have lucide-react installed, run: npm i lucide-react

import { MainNavigation } from "@/components/layouts/MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "../layouts/MobileNavigation";

export default function Header() {
  return (
    // <header className="w-full border-b bg-[#74be97]">
    //   <nav className="container mx-auto flex h-16 items-center bg-yellow-300">
    //     <MainNavigation navl={siteConfig.mainNav} />
    //   </nav>
    // </header>
    // <nav className="bg-[#74be97] px-6 py-4 text-white">
    //   {/* Container to restrict max-width and center contents */}
    //   <div className="container mx-auto flex items-center justify-between">
    //     {/* 1. Left Side: Logo */}
    //     <Link to="/" className="text-2xl font-bold tracking-wide">
    //       Laurnit
    //     </Link>
    //     <MainNavigation navl={siteConfig.mainNav} />

    //   </div>
    // </nav>

    <header className="w-full border-b bg-[#74be97]">
      <nav className="container mx-auto flex h-16 items-center px-4">
        <MainNavigation navl={siteConfig.mainNav} />
        <MobileNavigation navl={siteConfig.mainNav} />
      </nav>
    </header>
  );
}
