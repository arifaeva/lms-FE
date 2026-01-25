import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyle = tv({
  base: "flex select-none cursor-pointer justify-center rounded-md bg-transparent transition duration-150 focus:outline-pinkish disabled:bg-slate-50 disabled:text-neutral-400",
  variants: {
    variant: {
      primary:
        "bg-indigo-600 text-white hover:bg-indigo-600 focus:bg-indigo-600 active:ring-0",
      secondary:
        "bg-indigo-50 text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 active:text-indigo-900 active:ring-0",
      outlined:
        "bg-white text-neutral-900 ring-1 ring-border hover:bg-zinc-50 hover:ring-border focus:bg-zinc-50 active:ring-0",
      text: "bg-transparent text-indigo-600 hover:bg-indigo-400 focus:bg-indigo-400 active:text-indigo-900 active:ring-0",
      danger:
        "bg-rose-600 text-white hover:bg-rose-400 active:bg-rose-900 active:ring-0",
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
