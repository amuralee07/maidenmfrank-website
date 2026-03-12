import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';
import { Root } from './components/Root';
import { Home } from './pages/Home';

// Lazy load other pages to improve navigation performance
const Speaking = lazy(() => import('./pages/Speaking').then(module => ({ default: module.Speaking })));
const Books = lazy(() => import('./pages/Books').then(module => ({ default: module.Books })));
const Coaching = lazy(() => import('./pages/Coaching').then(module => ({ default: module.Coaching })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const FeedbackPreview = lazy(() => import('./pages/FeedbackPreview').then(module => ({ default: module.FeedbackPreview })));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block size-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mb-4" />
      <div className="text-xl font-bold text-[#09090b]">Loading...</div>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { 
        index: true, 
        element: <Home />
      },
      { 
        path: "speaking", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Speaking />
          </Suspense>
        )
      },
      { 
        path: "books", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Books />
          </Suspense>
        )
      },
      { 
        path: "coaching", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Coaching />
          </Suspense>
        )
      },
      { 
        path: "contact", 
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        )
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
        )
      },
      // Private review link – not exposed in navigation
      {
        path: "review",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <FeedbackPreview />
          </Suspense>
        )
      },
    ],
  },
]);
