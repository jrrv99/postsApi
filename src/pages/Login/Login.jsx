import Page from '@components/Page';
import { signInWithGoogle } from '@services/firebase/firebase';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <Page title="Login">
      <div className="login">
        <div className="login__card">
          <button onClick={signInWithGoogle}>
            <FaGoogle />
          </button>
        </div>
      </div>
    </Page>
  );
};

export default Login;
