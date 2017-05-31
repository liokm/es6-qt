import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

console.log('foobar')
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
