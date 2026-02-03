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
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch("http://localhost:3000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return json({ error: data }, { status: res.status });
  }

  return redirect("/dashboard");
}

export default function LoginPage() {
  const actionData = useActionData<ActionData>();

  return (
    <main className="flex justify-center items-center">
      <Form method="post" className="space-y-4 w-xs">
        {actionData?.error && (
          <p className="text-sm text-red-600">
            {actionData.error.message ?? "Login failed"}
          </p>
        )}

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
      </Form>
    </main>
  );
}
