import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { Suspense } from 'react';
import { Navbar } from '../components/Navbar';

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => {
        window.location.href = '/404';
        return null;
    },
});

function RootComponent() {
    return (
        <Suspense
            fallback={
                <div className='fixed inset-0 bg-gradient-to-br from-base-300 via-base-200 to-base-300'>
                    <div className='absolute inset-0 overflow-hidden'>
                        <div className='absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                        <div className='absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                    </div>
                </div>
            }>
            <Navbar />
            <Outlet />
            <Analytics />
        </Suspense>
    );
}
