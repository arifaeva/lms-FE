import { Outlet, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { Sidebar } from "~/components/shared/sidebar";

import { Icon } from "@iconify/react";
import { showSearchCommandAtom } from "~/atoms/search-command.atom";
import { MaximizeIcon } from "~/components/icons/maximize.icon";
import { MinimizeIcon } from "~/components/icons/minimize.icon";
import * as SearchCommand from "~/components/ui/search-command";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { API_URL } from "~/config/api.url";

type Role = "STUDENT" | "USER" | "ADMIN";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch(`${API_URL}/api/v1/users/me`, {
    headers: request.headers,
  });

  if (!response.ok) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const data = await response.json();

  return Response.json({
    user: data as {
      id: string;
      name: string;
      email: string;
      role: Role;
    },
  });
}

export default function DashboardLayout() {
  const {
    user: { role },
  } = useLoaderData<typeof loader>();
  const setOpen = useSetAtom(showSearchCommandAtom);

  const suggestionsMenu = [
    {
      label: "Dark mode",
      icon: <Icon icon="solar:moon-starts-linear" width="12px" height="12px" />,
    },
    {
      label: "Minimum Width Courses",
      icon: (
        <MinimizeIcon className='fill-neutral-500 group-data-[selected="true"]:fill-white' />
      ),
    },
    {
      label: "Maximum Width Courses",
      icon: (
        <MaximizeIcon className='fill-neutral-500 group-data-[selected="true"]:fill-white' />
      ),
    },
  ];

  useEffect(() => {
    function down(event: KeyboardEvent) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="flex transition-all">
        <div className="basis-auto">
          <Sidebar mode={role} />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <SearchCommand.Command>
        <SearchCommand.Empty>Not Found</SearchCommand.Empty>
        <SearchCommand.Group heading="suggestions">
          {suggestionsMenu.map(({ icon, label }) => (
            <SearchCommand.Item key={new Date().toISOString()}>
              <div className='flex h-5 w-5 items-center justify-center rounded border border-slate-600 bg-slate-50 p-0.75 group-data-[selected="true"]:border-indigo-600 group-data-[selected="true"]:bg-indigo-600 group-data-[selected="true"]:text-white'>
                {icon}
              </div>
              <span className="text-sm">{label}</span>
            </SearchCommand.Item>
          ))}
        </SearchCommand.Group>
      </SearchCommand.Command>
    </>
  );
}
