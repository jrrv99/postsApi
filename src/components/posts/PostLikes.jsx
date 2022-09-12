import PropTypes from 'prop-types';
import { Chip } from '@components';
import { FaHeart } from 'react-icons/fa';

const PostLikes = ({ likes = 0 }) => {
  return (
    <Chip>
      <FaHeart />
      {likes}
    </Chip>
  );
};

PostLikes.propTypes = {
  likes: PropTypes.number,
};

export default PostLikes;
