import React from 'react';
import PropTypes from 'prop-types';

export const GroupBandElement = (props) => {
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
}

GroupBandElement.propTypes = {
  name: PropTypes.string,
};

GroupBandElement.defaultProps = {
  name: 'Kangen Band',
};

export default GroupBandElement;
