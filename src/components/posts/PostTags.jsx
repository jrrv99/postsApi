import PropTypes from 'prop-types';
import { Chip, Text } from '@components';
import { Link } from 'react-router-dom';

import { CardTags } from '@styles/PostCard.module.css';
import { PrivateRoutes } from '@/routes';

const PostTags = ({ tags }) => {
  return (
    <div className={`${CardTags}`}>
      {tags.map(tag => (
        <Link key={tag} to={`${PrivateRoutes.TAG}/${tag}`}>
          <Chip>
            <Text size="small">{tag}</Text>
          </Chip>
        </Link>
      ))}
    </div>
  );
};

PostTags.propTypes = {
  tags: PropTypes.array,
};

export default PostTags;
