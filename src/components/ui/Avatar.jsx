import PropTypes from 'prop-types';

import '@styles/Avatar.css';

const Avatar = ({ src, size = 'normal', alt = '' }) => {
  return (
    <img className={`avatar avatar--${size}`} src={src} alt="user avatar" />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
};

export default Avatar;
