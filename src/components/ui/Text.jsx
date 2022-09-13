import PropTypes from 'prop-types';
import styles from '@styles/Text.module.css';

const Text = ({ size, type, children, className }) => {
  return (
    <p
      className={`${styles.Text} ${styles[size]} ${className} ${styles[type]}`}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  size: PropTypes.string, // {small, medium, normal, big}
  type: PropTypes.string, // {default, bold, soft}
  className: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultValues = { size: 'normal', type: 'default', children: null };

export default Text;
