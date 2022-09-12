import PropTypes from 'prop-types';
import { format } from 'timeago.js';
import { AvatarChip, Text } from '@components';
import { PrivateRoutes } from '@/routes';
import { Link } from 'react-router-dom';

import '@styles/Comment.css';

const Comment = ({ data }) => {
  const { message, publishDate, ownerId, ownerFullName, ownerPic } = data;

  return (
    <div className="comment">
      <Link to={`${PrivateRoutes.USER}/${ownerId}`}>
        <AvatarChip
          src={ownerPic}
          label={ownerFullName}
          secondLabel={format(publishDate)}
        />
      </Link>
      <Text type="bold">{message}</Text>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.object,
};

export default Comment;
