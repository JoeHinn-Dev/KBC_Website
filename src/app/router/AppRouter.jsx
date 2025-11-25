import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../../shared/components/Layout';
import { HomePage } from '../../features/home/pages/HomePage';
import { AboutPage } from '../../features/about/pages/AboutPage';
import { AdmissionsPage } from '../../features/admissions/pages/AdmissionsPage';
import { GalleryPage } from '../../features/gallery/pages/GalleryPage';
import { ContactPage } from '../../features/contact/pages/ContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'admissions', element: <AdmissionsPage /> },
            { path: 'gallery', element: <GalleryPage /> },
            { path: 'contact', element: <ContactPage /> },
        ],
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
