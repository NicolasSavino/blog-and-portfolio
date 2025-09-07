// src/components/BlogPostPage.jsx

// 1. ALL 'import' statements must be at the very top of the file.
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// 2. THEN, the Vite glob import can come after the imports.
const posts = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

// 3. FINALLY, your component function is defined.
const BlogPostPage = () => {
  const { slug } = useParams();
  const postPath = `../posts/${slug}.md`;
  
  // Find the post content from the imported posts object
  const postContent = posts[postPath];

  if (!postContent) {
    return (
      <div className="text-white text-center py-40">
        <h1 className="text-4xl font-bold mb-4">404 - Transmission Lost</h1>
        <p className="text-slate-400 mb-8">Could not find a post with that signal.</p>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-200 font-semibold">
          ← Return to The Codex
        </Link>
      </div>
    );
  }

  // Simple frontmatter parsing from the raw string content
  const frontmatterMatch = postContent.match(/---([\s\S]*?)---/);
  const content = postContent.replace(/---[\s\S]*?---/, '').trim();
  const frontmatter = {};
  if (frontmatterMatch) {
    frontmatterMatch[1].trim().split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        frontmatter[key.trim()] = valueParts.join(':').trim().replace(/'/g, '');
      }
    });
  }

  return (
    <article className="py-24 sm:py-32 text-white">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">{frontmatter.title || 'Untitled Post'}</h1>
        <p className="text-slate-400 mb-12">{frontmatter.date || ''}</p>
        
        <div className="prose prose-invert prose-lg max-w-none prose-h2:text-cyan-300 prose-a:text-violet-400 hover:prose-a:text-violet-300">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;