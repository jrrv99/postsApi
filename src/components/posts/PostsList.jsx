import PropTypes from 'prop-types';
import { PostCard } from '..';

import '@styles/PostsList.css';

const PostsList = ({ posts }) => {
  return (
    <section className="masonry">
      {posts?.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </section>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array,
};

export default PostsList;
