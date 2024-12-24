"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import Image from "next/image";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <>
      <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
        <div className="flex flex-1 flex-col gap-6">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "flex gap-4 items-center p-4 rounded-lg justify-start",
                  { "bg-blue-1": isActive }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  height={24}
                  width={24}
                />
                <p className="text-lg font-semibold max:lg:hidden">
                  {item.label}{" "}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
