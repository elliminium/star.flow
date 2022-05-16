import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/Home';

function render() {
 ReactDOM.render(
    <React.StrictMode>
      <Home/>
    </React.StrictMode>,
    document.getElementById('app')
);
}

render();