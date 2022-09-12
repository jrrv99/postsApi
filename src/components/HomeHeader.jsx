import useAuthStore from '@redux/hooks/useAuthStore';
import { useToggle } from '@hooks';
import { AvatarChip, Avatar, Divider, Logo, Header } from '@components';
import { VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '@routes/routes';

import '@styles/HomeHeader.css';

const HomeHeader = () => {
  const { user } = useAuthStore();
  const [open, setOpen] = useToggle(false);

  const handleKeyDown = () => {};

  return (
    <Header className="header">
      <Logo />
      <div
        className="profile"
        onClick={setOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
      >
        <Avatar src={user.photoUrl} />

        <div className={`profile__menu ${open ? 'profile__menu--open' : ''}`}>
          <AvatarChip
            src={user.photoUrl}
            label={user.nickname}
            secondLabel={user.email}
          />
          <Divider />
          <div className="profile__nav">
            <Link to={PrivateRoutes.LOGOUT} className="profile__nav__item">
              <span className="profile__nav__item__icon">
                <VscSignOut />
              </span>
              <p>SignOut</p>
            </Link>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HomeHeader;
