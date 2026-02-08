import type { ComponentPropsWithRef } from "react";

export type SvgProps = ComponentPropsWithRef<"svg">;

export default function DevscaleLogo(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 46 46"
      {...props}
    >
      <title>Devscale</title>
      <g filter="url(#filter0_d_577_904)">
        <path
          fill="url(#paint0_linear_577_904)"
          d="M13.51 1.938l.603-.004a5257.924 5257.924 0 003.342-.01l2.883-.003c1.225 0 2.45-.006 3.676-.013.947-.005 1.895-.005 2.842-.005.451 0 .903-.003 1.354-.006 4.002-.026 7.427.45 10.46 3.339 2.213 2.22 3.393 5.167 3.39 8.274l.004.603c.004.656.005 1.311.005 1.967l.005 1.376c.002.96.003 1.921.003 2.882 0 1.226.005 2.45.013 3.676.004.948.005 1.895.005 2.843 0 .45.002.902.006 1.354.026 4.002-.45 7.427-3.34 10.46-2.22 2.212-5.166 3.392-8.273 3.39-.2 0-.398.002-.604.004-.655.004-1.31.004-1.966.005l-1.376.004c-.96.003-1.922.003-2.883.003-1.225 0-2.45.006-3.675.013-.948.005-1.895.005-2.843.005-.451 0-.903.003-1.354.006-4.002.026-7.427-.45-10.46-3.339-2.213-2.22-3.393-5.167-3.39-8.274 0-.199-.002-.398-.004-.603a5257.924 5257.924 0 00-.01-3.342c-.002-.961-.003-1.922-.002-2.883 0-1.226-.006-2.45-.013-3.676-.005-.947-.006-1.895-.006-2.843 0-.45-.002-.902-.005-1.354-.027-4.002.449-7.427 3.338-10.459 2.221-2.213 5.168-3.393 8.274-3.39z"
        />
        <path
          fill="#fff"
          d="M18.631 12.032c3.79-.138 7.54.06 10.487 2.79 2.048 2.22 2.644 4.695 2.61 7.651-.142 2.3-.936 4.188-2.439 5.928l-.552.473-.351.306c-1.662 1.357-3.736 2.253-5.89 2.241l-.682-.002-.709-.005-.719-.003-1.755-.01v-2.737l.794-.017c1.966-.059 3.73-.137 5.522-1.036l.698-.342c1.19-1.052 2.114-2.678 2.296-4.273.134-2.37-.06-4.08-1.573-5.977-1.197-1.292-2.63-1.821-4.365-1.895-.197-.01-.393-.018-.596-.027a2660.155 2660.155 0 00-1.245-.053l-1.53-.064v-2.948zM14 16.664h3.579v11.158H14V16.664z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_577_904"
          width="44.65"
          height="44.65"
          x="0.785"
          y="0.785"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="1.111" dy="1.111" />
          <feGaussianBlur stdDeviation="1.111" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.25708 0 0 0 0 0.156775 0 0 0 0 0.156775 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_577_904"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_577_904"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_577_904"
          x1="42.001"
          x2="-1.999"
          y1="35.889"
          y2="-11"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stopColor="#4D4D4D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
