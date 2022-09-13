import PropTypes from 'prop-types';
import { Header, NavigateButton } from '@components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import '@styles/ViewHeader.css';

const ViewHeader = ({ children = '' }) => {
  return (
    <Header className="header2">
      <NavigateButton className="goback">
        <MdOutlineArrowBackIosNew />
      </NavigateButton>
      {children}
    </Header>
  );
};

ViewHeader.propTypes = {
  children: PropTypes.node,
};

export default ViewHeader;
