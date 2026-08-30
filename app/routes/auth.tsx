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

      <div className="relative">
        <nav className="absolute left-0 top-0 w-full p-4 sm:px-8 sm:py-7">
          <Link to="/">
            <DevscaleIcon className="h-8 w-auto" />
          </Link>
        </nav>

        <div className="flex h-full items-center justify-center">
          <Outlet />
        </div>

        <footer className="absolute bottom-0 left-0 w-full p-6 text-center text-neutral-500">
          <p>©Devscale Indonesia</p>
        </footer>
      </div>
    </main>
  );
}
