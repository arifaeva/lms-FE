import type { SVGProps } from "react";

export const CommandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 8h8v8H8zm8 8.001h3a3 3 0 11-3 3zm-7.999 0h-3a3 3 0 103 3zM16 8h3a3 3 0 10-3-3zM8.001 8h-3a3 3 0 113-3z"
      />
    </svg>
  );
};
