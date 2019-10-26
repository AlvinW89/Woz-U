import React from 'react';

const Thing = ({ match }) => (
  <div>
    <h3>{match.params.thingId}</h3>
  </div>
);

export default Thing;