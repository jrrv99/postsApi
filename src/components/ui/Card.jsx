import PropTypes from 'prop-types';

import styles from '@styles/Card.module.css';

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
