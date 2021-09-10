import React from 'react';

export default ({ name, bye }) => (
  <h1>
    {bye ? 'Bye' : 'Hello'} {name}!
  </h1>
);
