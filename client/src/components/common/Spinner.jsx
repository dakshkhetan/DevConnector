import React from 'react';

import spinner from '../../assets/spinner.gif';

const Spinner = () => (
  <React.Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </React.Fragment>
);

export default Spinner;
