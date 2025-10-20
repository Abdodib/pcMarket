import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../component/navbar.jsx";
export const Route = createRootRoute({
    component: Rootlayout ,
});

function Rootlayout () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}