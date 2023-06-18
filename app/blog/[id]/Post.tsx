import { Metadata } from 'next';
import React from 'react';

const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
};

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const post = await getData(id);

  return {
    title: `Post ${post.title} | Next App`,
  };
};

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);

  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
