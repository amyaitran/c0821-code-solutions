import React from 'react';
import ReactDOM from 'react-dom';

var msg = React.createElement(
  'h1',
  {},
  'Hello, React!'
);

ReactDOM.render(msg, document.getElementById('root'));
