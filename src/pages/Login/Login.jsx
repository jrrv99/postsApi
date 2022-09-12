import { Divider, Page, Logo } from '@components';
import { signInWithGoogle } from '@services/firebase/auth';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

import '@styles/Login.css';

const providers = [
  {
    icon: <FaGoogle />,
    label: 'Google',
    onClick: signInWithGoogle,
    className: 'login__card__provider',
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook (Comming soon)',
    className: 'login__card__provider--inactive',
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter (Comming soon)',
    className: 'login__card__provider--inactive',
  },
  {
    icon: <FaGithub />,
    label: 'Github (Comming soon)',
    className: 'login__card__provider--inactive',
  },
];

const Login = () => {
  return (
    <Page title="Login">
      <div className="login">
        <Logo />
        <div className="login__card">
          <h3>Get access with:</h3>
          {providers?.map(({ icon, label, ...rest }, index) => (
            <div style={{ width: '100%' }} key={index}>
              <Divider />
              <div {...rest}>
                {icon}
                <p>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Login;
