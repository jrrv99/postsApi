import { useParams } from 'react-router-dom';
import { Page, ViewHeader, AvatarChip, Loader, PostsList } from '@components';
import { useGetUserByIdQuery, useGetPostsByUserQuery } from '@/redux/api/posts';

const UserView = () => {
  const { id: userId } = useParams();
  const { data: user, error, isLoading } = useGetUserByIdQuery(userId);
  const { data } = useGetPostsByUserQuery(userId);

  if (isLoading) return <Loader />;
  if (error) return <pre>{JSON.stringify(error, false, 2)}</pre>;

  return (
    <Page title={'USer'}>
      <ViewHeader>
        <AvatarChip
          src={user.picture}
          label={`${user.title}. ${user.firstName}`}
          secondLabel={user.email}
        />
      </ViewHeader>

      <pre>{JSON.stringify(user, false, 2)}</pre>
      <PostsList posts={data?.data} />
    </Page>
  );
};

export default UserView;
