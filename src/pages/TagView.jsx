import { useParams } from 'react-router-dom';
import { Page, ViewHeader, Text, Loader, PostsList } from '@components';
import { useGetPostsByTagQuery } from '@/redux/api/posts';

const TagView = () => {
  const { tag } = useParams();
  const { data: posts, error, isLoading } = useGetPostsByTagQuery(tag);

  if (isLoading) return <Loader />;
  if (error) return <pre>{JSON.stringify(error, false, 2)}</pre>;

  return (
    <Page title={tag}>
      <ViewHeader>
        <Text size="big">{`#${tag}`}</Text>
      </ViewHeader>

      <PostsList posts={posts?.data} />
    </Page>
  );
};

export default TagView;
