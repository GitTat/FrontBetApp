import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login.js'

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();

