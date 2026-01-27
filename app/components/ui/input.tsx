import type React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const inputStyle = tv({
  base: "flex w-full items-center rounded-md border border-neutral-200 bg-white text-sm text-neutral-900 shadow-sm outline-none transition duration-150 placeholder:text-sm placeholder:text-neutral-200 focus:border-indigo-600 disabled:bg-neutral-100 disabled:shadow-inner",
  variants: {
    size: {
      sm: "h-[36px] px-2 py-3",
      md: "px-3 py-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputStyle = VariantProps<typeof inputStyle>;

interface Props
  extends InputStyle, Omit<React.ComponentPropsWithoutRef<"input">, "size"> {}

export const Input = (props: Props) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={twMerge(inputStyle({ ...props }), props.className)}
        size={undefined}
      />
    </div>
  );
};
