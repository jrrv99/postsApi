import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ to, children, ...rest }) => {
  const navigate = useNavigate();
  const handleKeyDown = e => {
    console.log(e);
  };

  const handleClick = () => {
    const path = !to ? -1 : to;
    navigate(path);
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
};

NavigateButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default NavigateButton;
