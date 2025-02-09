import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';

export const Route = createRootRoute({
    component: () => (
        <>
            <Navbar />
            <Outlet />
        </>
    ),
    notFoundComponent: () => {
        window.location.href = '/404';
        return null;
    }
});
