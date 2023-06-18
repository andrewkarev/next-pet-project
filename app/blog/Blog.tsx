// export { default, metadata } from './Blog';
import Link from 'next/link';
import React from 'react';

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Unable to fetch posts');

  return response.json();
};

export const metadata = {
  title: 'Blog | Next App',
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
