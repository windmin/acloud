import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Root from './container/Root';

import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
