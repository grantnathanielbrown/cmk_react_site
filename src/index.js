import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

// dependencies
import {HashRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
    <App />
    </Router>
, document.getElementById('root'));
// registerServiceWorker();