import type { ActionFunctionArgs } from "react-router";
import { redirect, useActionData, Form } from "react-router";
import { json } from "@remix-run/node";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

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

  const res = await fetch("http://localhost:3000/api/v1/auth/register", {
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
      <Form method="post" className="space-y-4 w-xs">
        {actionData?.error && (
          <p className="text-sm text-red-600">
            {actionData.error.message ?? "Login failed"}
          </p>
        )}

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
      </Form>
    </main>
  );
}
