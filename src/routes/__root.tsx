import { createRootRoute, Outlet, useRouter } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Suspense, useEffect } from 'react';
import { trackPageView } from '../lib/firebase';

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => {
        window.location.href = '/404';
        return null;
    }
});

function RootComponent() {
    const router = useRouter();

    // Track page views
    useEffect(() => {
        const handleRouteChange = () => {
            const pageName = window.location.pathname === '/' ? 'Home' : window.location.pathname.slice(1);
            trackPageView(pageName);
        };

        // Track initial page view
        handleRouteChange();

        // Listen for route changes
        const unsubscribe = router.subscribe('onBeforeLoad', handleRouteChange);
        return () => unsubscribe();
    }, [router]);

    return (
        <Suspense fallback={
            <div className='fixed inset-0 bg-gradient-to-br from-base-300 via-base-200 to-base-300'>
                <div className='absolute inset-0 overflow-hidden'>
                    <div className='absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                    <div className='absolute -bottom-[30%] -right-[20%] w-[70%] h-[70%] rounded-full bg-teal-400/20 blur-3xl'></div>
                </div>
            </div>
        }>
            <Navbar />
            <Outlet />
        </Suspense>
    );
}
