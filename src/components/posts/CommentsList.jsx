import PropTypes from 'prop-types';
import { Loader, Comment, Text } from '@components';
import { useGetCommentsByPostQuery } from '@redux/api/posts';

import '@styles/CommentsList.css';

const CommentsList = ({ id }) => {
  const { data, isLoading, error } = useGetCommentsByPostQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <pre>{JSON.stringify(error, false, 2)}</pre>;
  if (data.total === 0)
    return (
      <Text size="big" type="soft">
        No comments yet
      </Text>
    );

  return (
    <div className="comments">
      {data.commnets?.map(({ id, ...comment }) => (
        <Comment key={id} data={comment} />
      ))}
    </div>
  );
};

CommentsList.propTypes = {
  id: PropTypes.string,
};

export default CommentsList;
