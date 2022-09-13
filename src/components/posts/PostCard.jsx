import PropTypes from 'prop-types';
import { format } from 'timeago.js';
import { AvatarChip, PostLikes, PostTags, NavigateButton } from '@components';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@routes';

import {
  BlurChip,
  Card,
  CardImage,
  OwnerDetails,
  CardDetails,
} from '@styles/PostCard.module.css';

const PostCard = ({ id, image, likes, tags, text, publishDate, owner }) => {
  return (
    <div className={Card}>
      <NavigateButton to={`${PrivateRoutes.POST}/${id}`}>
        <img className={CardImage} src={image} alt="text" />
      </NavigateButton>

      <Link to={`user/${owner.id}`} className={`${BlurChip} ${OwnerDetails}`}>
        <AvatarChip
          src={owner.picture}
          label={`${owner.title}. ${owner.firstName} ${owner.lastName}`}
          secondLabel={format(publishDate)}
        />
      </Link>
      <div className={`${CardDetails}`}>
        <PostLikes likes={likes} />
        <PostTags tags={tags} />
      </div>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number,
  tags: PropTypes.array,
  text: PropTypes.string,
  publishDate: PropTypes.string,
  owner: PropTypes.object,
};

export default PostCard;
