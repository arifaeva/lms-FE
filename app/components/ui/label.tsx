import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

export const labelStyle = tv({
  base: "h-2.5 font-medium text-sm text-neutral-900",
  variants: {
    variant: {
      sublabel: "font-normal text-neutral-500",
    },
  },
});

interface Props {
  label: string;
  variant?: "sublabel";
  className?: string;
}

export const Label = (props: Props) => {
  return (
    <div>
      <div
        className={twMerge(
          labelStyle({ variant: props.variant }),
          props.className,
        )}
      >
        {props.label}
      </div>
    </div>
  );
};
