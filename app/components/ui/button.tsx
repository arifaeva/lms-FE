import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const style = tv({
  base: "bg-slate-50 text-slate-800 font-medium tracking-tight rounded-lg px-4 py-2",
  variants: {
    variant: {
      primary: "bg-indigo-600 text-white",
      secondary: "bg-slate-200 text-slate-700",
      outline: "bg-transparent border border-slate-0",
      ghost: "bg-transparent text-slate-300",
    },
    size: {
      sm: "px-2.5 py-1.5 text-sm",
      md: "px-3.5 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type TButton = VariantProps<typeof style>;

interface Props extends TButton, React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
