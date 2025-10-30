import { createRootRoute, Outlet, redirect } from "@tanstack/react-router";
import Navbar from "../component/navbar.jsx";

export const Route = createRootRoute({
  component: RootLayout,
  beforeLoad: ({ location }) => {
    if (location.pathname === "/") {
      throw redirect({ to: "/home" });
    }
  },
});

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
