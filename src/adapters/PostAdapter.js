import OwnerAdapter from './OwnerAdapter';

const PostAdapter = post => ({
  postId: post.id,
  image: post.image,
  likes: post.likes,
  postLink: post.link,
  tags: post.tags,
  text: post.text,
  publishDate: post.publishDate,
  ...OwnerAdapter(post.owner),
});

export default PostAdapter;
