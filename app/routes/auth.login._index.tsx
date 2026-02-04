import type { ActionFunctionArgs } from "react-router";
import { redirect, useActionData, Form, Link } from "react-router";
// import { json } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { API_URL } from "~/config/api.url";

type ActionData = {
  error?: {
    message?: string;
  };
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });

  // 🔥 grab the cookie from backend
  const setCookie = res.headers.get("set-cookie");

  if (!res.ok) {
    const data = await res.json();
    return { error: data };
  }

  // ⭐ forward it to the browser
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": setCookie ?? "",
    },
  });
}

export default function LoginPage() {
  const actionData = useActionData<ActionData>();

  return (
    <main className="flex justify-center items-center">
      <Form method="post" className="space-y-4 w-sm">
        {actionData?.error && (
          <p className="text-sm text-red-600">
            {actionData.error.message ?? "Login failed"}
          </p>
        )}

        <div className="space-y-1">
          <h1>Login</h1>
          <p className="leading-5">Log in to continue where you left off</p>
        </div>

        <div className="space-y-3">
          <Input name="email" type="email" placeholder="Email" required />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>

        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-indigo-600">
              Register here.
            </Link>
          </p>
        </div>
      </Form>
    </main>
  );
}
