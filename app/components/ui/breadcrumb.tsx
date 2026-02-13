import { twMerge } from "tailwind-merge";
import { Fragment } from "react";
import { Link } from "react-router";

interface IBreadcrumbItem {
  label: string;
  href: string;
}

interface IBreadcrumb {
  items: IBreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: IBreadcrumb) => {
  return (
    <nav className={twMerge("", className)}>
      <div className="flex items-center gap-2 font-semibold">
        {items.map((item, index) => (
          <Fragment key={index}>
            <Link to={item.href}>
              {" "}
              <span className="capitalize">{item.label}</span>
            </Link>

            {index + 1 < items.length && (
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.09327 0.692163C1.35535 0.467524 1.74991 0.497875 1.97455 0.759954L6.97455 6.59329C7.17517 6.82734 7.17517 7.17272 6.97455 7.40678L1.97455 13.2401C1.74991 13.5022 1.35535 13.5325 1.09327 13.3079C0.831188 13.0833 0.800837 12.6887 1.02548 12.4266L5.67684 7.00003L1.02548 1.57344C0.800837 1.31136 0.831188 0.916802 1.09327 0.692163Z"
                  fill="#737373"
                />
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};
