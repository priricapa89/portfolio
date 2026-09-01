import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("claude-community-boston", "routes/claude-community-boston.tsx"),
  route("api/contact", "routes/api.contact.ts"),
  route("api/community", "routes/api.community.ts"),
] satisfies RouteConfig;
