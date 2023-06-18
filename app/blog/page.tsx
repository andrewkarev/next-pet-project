import React from 'react';
import PostSearch from '@/components/PostSearch';
import Posts from '@/components/Posts';

export const metadata = {
  title: 'Blog | Next App',
};

const Blog = async () => {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
};

export default Blog;
