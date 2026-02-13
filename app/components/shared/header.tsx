import React, { type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { BellIcon } from "../icons/bell.icon";
import { MoonAndStar } from "../icons/moon-and-star.icon";
import { ProfileMenu } from "../ui/profile-menu";

export interface HeaderProps extends ComponentPropsWithRef<"header"> {
  children: React.ReactNode;
  className: string;
}

export const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      {...props}
      className={twMerge(
        "flex w-full items-center justify-between border-b border-b-slate-200 bg-slate-50 px-6 py-2.5",
        className,
      )}
    >
      {children}
      <div className="flex items-center gap-4 text-indigo-600">
        <BellIcon className="size-5" />
        <MoonAndStar className="size-5" />
        <ProfileMenu />
      </div>
    </header>
  );
};
