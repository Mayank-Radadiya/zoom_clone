"use client";
import { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav: FC = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none">
          <SheetHeader className="hidden">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Explore the app sections below</SheetDescription>
          </SheetHeader>

          <Link href="/" className="flex items-center gap-1 mt-4">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Zoom logo"
            />
            <p className="text-[26px] font-extrabold text-white">ZOOM</p>
          </Link>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-lg max-w-60",
                          { "bg-blue-1": isActive }
                        )}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          height={20}
                          width={20}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
