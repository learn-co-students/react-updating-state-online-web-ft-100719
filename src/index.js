
import React from 'react';
import ReactDOM from 'react-dom';
import LightSwitch from './components/LightSwitch'
import ClickityClick from './components/ClickityClick';

ReactDOM.render(<ClickityClick />, document.getElementById('root'));

ReactDOM.render(
<div>
  <ClickityClick />
  <LightSwitch />
</div>,
  document.getElementById('root')
);
