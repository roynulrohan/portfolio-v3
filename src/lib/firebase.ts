import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
export const analytics = getAnalytics(app);

// Track page views
export const trackPageView = (pageName: string) => {
    logEvent(analytics, 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname
    });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
    logEvent(analytics, 'section_view', {
        section_name: sectionName
    });
};

// Track external link clicks
export const trackExternalLinkClick = (linkName: string, url: string) => {
    logEvent(analytics, 'external_link_click', {
        link_name: linkName,
        link_url: url
    });
}; 