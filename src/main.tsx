import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Contact from './pages/Contactus.tsx';
import CareersPage from './pages/Carrer.tsx';
import IndustriesWeServe from './pages/IndustryWeServe.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<CareersPage/>} />
        <Route path="/industry-we-serve" element={<IndustriesWeServe/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
