import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { Header } from "~/components/shared/header";
import { Breadcrumb } from "~/components/ui/breadcrumb";
import { API_URL } from "~/config/api.url";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch(`${API_URL}/api/v1/users/me`, {
    headers: request.headers,
  });

  if (!response.ok) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return await response.json();
}

const breadcrumbItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Devscale Indonesia", href: "/dashboard" },
];

export default function Dashboard() {
  const user = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen overflow-y-auto">
      <Header className="h-fit border-b border-b-slate-200">
        <Breadcrumb items={breadcrumbItems} />
      </Header>

      <div className="flex items-center h-lh justify-center">
        <h1 className="font-medium text-3xl tracking-tight">
          Hello, {user.name}!
        </h1>
      </div>
    </main>
  );
}
