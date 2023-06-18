const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`${BASE_URL}?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
