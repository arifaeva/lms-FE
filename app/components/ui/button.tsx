import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyle = tv({
  base: "flex select-none cursor-pointer justify-center rounded-md font-medium leading-5 transition duration-150 hover:shadow-sm focus:shadow-none active:shadow-none disabled:bg-neutral-100 disabled:text-neutral-400 shadow-sm active:ring-0 focus:outline-[3px] focus:outline-indigo-600/20 active:outline-0",
  variants: {
    variant: {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-400 focus:bg-indigo-400 active:bg-indigo-900",
      secondary:
        "bg-indigo-50 text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 active:text-indigo-900",
      outlined:
        "bg-white text-neutral-900 border border-neutral-200 hover:bg-zinc-50 focus:bg-zinc-50 active:ring-0 active:bg-neutral-200",
      text: "bg-transparent text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 active:text-indigo-900 disabled:bg-transparent disabled:outline-0",
      danger:
        "bg-rose-600 text-white hover:bg-rose-400 focus:bg-rose-400 active:bg-rose-900 ",
    },
    size: {
      sm: "px-4 py-1 text-xs",
      md: "px-4 py-1.5 text-sm",
      lg: "px-4 py-2 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonStyle = VariantProps<typeof buttonStyle>;

interface ButtonProps
  extends ButtonStyle, React.ComponentPropsWithRef<"button"> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
