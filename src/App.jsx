import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your existing and new components
import Background from './components/Background';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';
import BlogListPage from './components/BlogListPage';
import BlogPostPage from './components/BlogPostPage';

// It's cleaner to create a simple component for your main page content
const HomePage = () => (
  <>
    <Hero />
    <Skills />
  </>
);

function App() {
  return (
    <main className="relative">
      <Background />
      <div className="container mx-auto px-4">
        <Routes>
          {/* Route for the main portfolio homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the list of all blog posts */}
          <Route path="/blog" element={<BlogListPage />} />
          
          {/* Route for a single blog post, using a dynamic "slug" */}
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default App; // <-- This is the line that was likely missing.