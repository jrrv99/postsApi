import PropTypes from 'prop-types';
import { Avatar, Text } from '@components';

import '@styles/AvatarChip.css';

const AvatarChip = ({ src, label, secondLabel }) => {
  return (
    <div className="AvatarChip">
      <Avatar src={src} />
      <span>
        <Text>{label}</Text>
        <Text size="small" type="soft">
          {secondLabel}
        </Text>
      </span>
    </div>
  );
};

AvatarChip.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
  secondLabel: PropTypes.string,
};

export default AvatarChip;
