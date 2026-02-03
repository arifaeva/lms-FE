import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // Home page → "/"
  index("routes/home.tsx"),

  // Auth layout → "/auth/*"
  layout("routes/auth.tsx", [
    // Login page → "/auth/login"
    route("auth/login", "routes/auth.login._index.tsx"),
    route("auth/register", "routes/auth.register._index.tsx"),
  ]),

  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
