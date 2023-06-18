'use client';

import { usePosts } from '@/store';
import React, { FormEventHandler, useState } from 'react';
import { shallow } from 'zustand/shallow';

const PostSearch = () => {
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch, shallow);

  const [search, setSearch] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await getPostsBySearch(search);
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
