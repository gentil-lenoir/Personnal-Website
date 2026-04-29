import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Loading from './components/Loadding.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import './ignore-ts-errors.ts';

const Home = lazy(() => import('./views/Home.tsx'));
const Bio = lazy(() => import('./views/Bio.tsx'));
const Portfolio = lazy(() => import('./views/Portfolio.tsx'));
const Contacts = lazy(() => import('./views/Contacts.tsx'));
const Images = lazy(() => import('./views/Images.tsx'));
const NotFound = lazy(() => import('./views/NotFound.tsx'));
const CVPage = lazy(() => import('./views/CV.tsx'));
const CVViewer = lazy(() => import('./views/CVViewer.tsx'));

const cvBasePaths = [
  '/cv',
  '/c_v',
  '/c-v',
  '/curriculum-vitae',
  '/curriculum_vitae',
  '/cirriculum-vitae',
  '/cirriculum_vitae',
];

const App = () => (
  <Router>
    <Analytics />
    <ScrollToTop />

    <Routes>
      {/* ── Viewer PDF plein écran — sans Header ni Footer ── */}
      {cvBasePaths.map((p) => (
        <Route
          key={`${p}-viewer`}
          path={`${p}/:lang`}
          element={
            <Suspense fallback={<Loading />}>
              <CVViewer />
            </Suspense>
          }
        />
      ))}

      {/* ── Toutes les autres routes — avec Header + Footer ── */}
      <Route
        path="*"
        element={
          <>
            <Header />
            <main style={{ minHeight: '70vh' }}>
              <Suspense fallback={<Loading />}>
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bio" element={<Bio />} />
                    <Route path="/biography" element={<Bio />} />
                    <Route path="/biographie" element={<Bio />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Portfolio />} />
                    <Route path="/projects" element={<Portfolio />} />
                    <Route path="/project" element={<Portfolio />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/images" element={<Images />} />
                    <Route path="/image" element={<Images />} />
                    <Route path="/img" element={<Images />} />
                    {/* Page de sélection CV (sans lang) */}
                    {cvBasePaths.map((p) => (
                      <Route key={p} path={p} element={<CVPage />} />
                    ))}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </ErrorBoundary>
              </Suspense>
            </main>
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;