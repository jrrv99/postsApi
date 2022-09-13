import { useGetPostsQuery } from '@redux/api/posts';
import { Page, Loader, PostsList } from '@components';

const Home = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <Loader />;
  if (error) return <pre>{JSON.stringify(error, false, 2)}</pre>;

  return (
    <Page title="Feed">
      <PostsList posts={data.data} />
    </Page>
  );
};

export default Home;
