import { useEffect } from 'react';

const Page = ({ title = '', children }) => {
  useEffect(() => {
    document.title = `${title.toUpperCase()}  | POSTSIPSUM`;
  }, [title]);
  return children;
};

export default Page;
