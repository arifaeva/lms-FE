import { Link, Outlet } from "react-router";
import { DevscaleIcon } from "~/components/icons/devscale.icon";

export default function AuthLayout() {
  return (
    <main className="grid h-dvh xl:grid-cols-[496px_1fr]">
      <div className="pointer-events-none relative z-10 hidden flex-col justify-end bg-linear-to-b from-indigo-900 via-indigo-700 to-indigo-600 p-10.5 text-white *:z-10 xl:flex">
        <div className="hidden xl:block"> </div>
        <p className="mb-2 text-balance font-bold text-5xl text-white">
          Unlock your 100% Potential
        </p>
        <p className="text-balance leading-6 text-white text-base">
          Devscale Indonesia membantu para student untuk berkembang 10x lebih
          cepat daripada belajar otodidak.
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <nav className="p-4 sm:px-8 sm:py-7">
          <Link to="/" className="outline-[3px] focus:outline-pinkish">
            <DevscaleIcon />
          </Link>
        </nav>
        <Outlet />
        <footer className="flex items-center justify-center p-6 text-neutral-500">
          <p> &#169;2024 Devscale Indonesia</p>
        </footer>
      </div>
    </main>
  );
}
