// src/components/BlogListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'my-first-post',
    title: 'The “Teenage” Dream',
    date: '2025-09-06',
    excerpt: 'I’m approaching my last few days being a teenager. I’ve started getting lower back pain, my reflexes aren’t as sharp, and it takes me quite a bit of time to get out of bed.'
  },
  // Add more post objects here as you write them
];

const BlogListPage = () => {
  return (
    <section className="py-24 sm:py-32 text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-5xl font-bold text-center mb-16">A Depth Into the Confines of My Soul</h1>
        
        <div className="space-y-12">
          {posts.map(post => (
            <div key={post.slug} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-cyan-400/50 transition-colors duration-300">
              <h2 className="text-3xl font-bold mb-2 text-cyan-300">
                <Link to={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-slate-400 mb-4">{post.date}</p>
              <p className="text-slate-300">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-cyan-400 hover:text-cyan-200 font-semibold mt-6 inline-block">
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* --- MOVED BUTTON --- */}
        <div className="text-center mt-16">
          <Link 
            to="/" 
            className="inline-block bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 border border-slate-700 hover:border-slate-600 px-6 py-2 rounded-full font-semibold transition-colors duration-300 backdrop-blur-sm"
          >
            ← Return to Sender
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogListPage;