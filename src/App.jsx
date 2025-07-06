import React from 'react';
import Hero from './components/Hero';
import ReadingList from './components/ReadingList';
import RelatedBlogs from './components/RelatedBlogs';
import MarketingArticles from './components/MarketingArticles';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <>
      <ThemeToggle />
      <main className="container">
        <Hero />
        <ReadingList />
        <RelatedBlogs />
        <MarketingArticles />
      </main>
    </>
  );
};

export default App;
