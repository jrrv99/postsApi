import PropTypes from 'prop-types';
import styles from '@styles/Chip.module.css';

const Chip = ({ className, children, ...rest }) => {
  return (
    <div className={`${className} ${styles.Chip}`} {...rest}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Chip;
