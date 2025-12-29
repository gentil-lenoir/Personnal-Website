import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Loading from './components/Loadding.tsx';
// import { Analytics } from "@vercel/analytics/react" 

const Home = loadable(() => import('./views/Home.tsx'));
const Bio = loadable(() => import('./views/Bio.tsx'));
const Portfolio = loadable(() => import('./views/Portfolio.tsx'));
const Contacts = loadable(() => import('./views/Contacts.tsx'));
const Images = loadable(() => import('./views/Images.tsx'));
const NotFound = loadable(() => import('./views/NotFound.tsx'));
const PDFViewer = loadable(() => import('./views/PDFViewer.tsx'));

const App = () => (
  <Router>
    {/* <Analytics /> */}
    <Header />
    <main style={{ minHeight: '70vh' }}>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </main>
    <Footer />
  </Router>
);

export default App;
