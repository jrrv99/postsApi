const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const API_ID = import.meta.env.VITE_APP_API_ID;

export const getPosts = async query => {
  const response = await fetch(`${BASE_URL}/${query}`, {
    method: 'GET',
    headers: { 'app-id': API_ID },
  });
  const data = await response.json();
  return data;
};
