import PropTypes from 'prop-types';
import { header } from '@styles/Header.module.css';

const Header = ({ className = '', children, ...rest }) => {
  return (
    <header className={`${header} ${className}`} {...rest}>
      {children}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
