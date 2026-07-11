import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const normalizeBase = (value) => {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;

  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
};

export default defineConfig(({ command }) => ({
  plugins: [react()],

  base:
    command === "build"
      ? normalizeBase(process.env.VITE_BASE_PATH || "/GC/")
      : "/",
}));