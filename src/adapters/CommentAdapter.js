import OwnerAdapter from './OwnerAdapter';

const CommentAdapter = comment => ({
  id: comment.id,
  message: comment.message,
  post: comment.post,
  publishDate: comment.publishDate,
  ...OwnerAdapter(comment.owner),
});

export default CommentAdapter;
