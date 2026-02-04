import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch("http://localhost:3000/api/v1/users/me", {
    headers: request.headers,
  });

  if (!response.ok) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return await response.json();
}

export default function Dashboard() {
  const user = useLoaderData<typeof loader>();

  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="font-medium text-3xl tracking-tight">
        Hello, {user.name}!
      </h1>
    </main>
  );
}
