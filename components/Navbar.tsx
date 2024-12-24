import Link from "next/link"; // Updated import
import Image from "next/image";
import { FC } from "react";
import MobileNav from "./MobileNav";

const Navbar: FC = () => {
  return (
    <nav className="flex-between fixed px-6 py-4 z-50 w-full bg-dark-1 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          height={32}
          width={32}
          alt="logo"
          className="max-sm:w-8"
        />
        <p className="text-[26px] font-extrabold text-white hidden sm:block">
          Zoom
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk auth */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
