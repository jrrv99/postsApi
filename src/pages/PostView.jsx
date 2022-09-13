import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '@redux/api/posts';
import {
  Page,
  Loader,
  AvatarChip,
  ViewHeader,
  Text,
  PostTags,
  PostLikes,
  CommentsList,
} from '@components';
import { PrivateRoutes } from '@routes';
import { useToggle } from '@/hooks';
import { format } from 'timeago.js';

import '@styles/PostView.css';

const PostView = () => {
  const { id: postId } = useParams();
  const { data: post, error, isLoading } = useGetPostByIdQuery(postId);
  const [showComments, toggleComments] = useToggle(false);

  if (isLoading) return <Loader />;
  if (error) return <pre>{JSON.stringify(error, false, 2)}</pre>;

  const {
    image,
    likes,
    // postLink,
    tags,
    text,
    publishDate,
    ownerId,
    ownerTitle,
    ownerFullName,
    ownerPic,
  } = post;

  const title = `${ownerFullName}: ${text}`;

  return (
    <Page title={title}>
      <ViewHeader>
        <Text size="big">Post</Text>
      </ViewHeader>
      <section className="postview">
        <div className="postViewCard">
          <Link to={`${PrivateRoutes.USER}/${ownerId}`}>
            <AvatarChip
              src={ownerPic}
              label={`${ownerTitle}. ${ownerFullName}`}
              secondLabel={format(publishDate)}
            />
          </Link>
          <div className="post__details">
            <img className="card__img" src={image} alt={text} />
            <div className="card__details">
              <div className="post__chips">
                <PostTags tags={tags} />
                <PostLikes likes={likes} />
              </div>

              <Text type="bold">{title}</Text>
            </div>
          </div>
          <button className="button" onClick={toggleComments}>{`${
            !showComments ? 'Show' : 'Hide'
          } comments`}</button>
        </div>
        {showComments && <CommentsList id={postId} />}
      </section>
    </Page>
  );
};

export default PostView;
