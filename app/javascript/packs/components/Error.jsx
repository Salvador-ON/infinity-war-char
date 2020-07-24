import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
  return (
    <h5 className="text-danger p-0 m-0" role="alert">
      *{error}
    </h5>
    );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
 
export default Error;

