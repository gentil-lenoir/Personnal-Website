import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Loading from './components/Loadding.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import { Analytics } from "@vercel/analytics/react"
import './ignore-ts-errors.ts';

const Home = lazy(() => import('./views/Home.tsx'));
const Bio = lazy(() => import('./views/Bio.tsx'));
const Portfolio = lazy(() => import('./views/Portfolio.tsx'));
const Contacts = lazy(() => import('./views/Contacts.tsx'));
const Images = lazy(() => import('./views/Images.tsx'));
const NotFound = lazy(() => import('./views/NotFound.tsx'));
const PDFViewer = lazy(() => import('./views/PDFViewer.tsx'));

const App = () => (
  <Router>
    <Analytics />
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
            <Route path="/cv" element={<PDFViewer />} />
            <Route path="/c-v" element={<PDFViewer />} />
            <Route path="/curriculum-vitae" element={<PDFViewer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </main>
    <Footer />
  </Router>
);

export default App;
