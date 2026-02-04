import type { ActionFunctionArgs } from "react-router";
import { redirect, useActionData, Form, Link } from "react-router";
import { json } from "@remix-run/node";
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

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return json({ error: data }, { status: res.status });
  }

  return redirect("/auth/login");
}

export default function RegisterPage() {
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
          <h1>Create an account</h1>
          <p className="leading-5">
            Create an account to start using the platform
          </p>
        </div>

        <div className="space-y-3">
          <Input name="name" type="name" placeholder="Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
          />

          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>

        <p>
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600">
            Login here.
          </Link>
        </p>
      </Form>
    </main>
  );
}
