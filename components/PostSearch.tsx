'use client';

import React, { FormEventHandler, useState } from 'react';
import useSWR from 'swr';
import { getPostsBySearch } from '@/services/getPosts';

const PostSearch = () => {
  const { mutate } = useSWR('posts');

  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostSearch;
