import { useAtomValue } from "jotai";
import { tv } from "tailwind-variants";
import { Link, useLocation } from "react-router";
import { isExpandedAtom } from "~/atoms/sidebar.atom";
import type React from "react";

export const menuStyle = tv({
  base: "*:-ml-[1px] group relative grid cursor-pointer select-none grid-cols-[40px_1fr] items-center overflow-hidden text-nowrap rounded-lg border border-transparent p-2.5 text-slate-600 ring-1 ring-transparent transition duration-300 hover:bg-indigo-50 disabled:bg-transparent disabled:text-neutral-500",
  variants: {
    isActive: {
      true: "border-[0.3px] border-neutral bg-[linear-gradient(180deg,_#4F46E5_0%,_#312E81_138.64%)] text-white shadow-sm outline-[0.3px] outline-indigo-600 ring-1 ring-indigo-600 transition duration-300 hover:bg-[linear-gradient(180deg,_#4338CA_0%,_#211F56_138.64%)] hover:text-white active:bg-[linear-gradient(180deg,_#312E81_0%,_#141335_138.64%)]",
    },
  },
});

interface Props {
  href: string;
  icon: React.ReactNode;
  label: string;
  target?: string;
  isActive?: boolean;
  status?: string;
}

export const Menu = (props: Props) => {
  const location = useLocation();
  const { href, target, icon, label } = props;
  const isExpanded = useAtomValue(isExpandedAtom);

  return (
    <Link
      to={href}
      target={target}
      className={menuStyle({ isActive: location.pathname === href })}
    >
      {icon}
      {isExpanded && (
        <div className="absolute top-2.5 left-10 w-55 text-sm"> {label} </div>
      )}
    </Link>
  );
};
