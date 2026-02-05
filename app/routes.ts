import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("routes/auth.tsx", [
    route("auth/login", "routes/auth.login._index.tsx"),
    route("auth/register", "routes/auth.register._index.tsx"),
  ]),

  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;
