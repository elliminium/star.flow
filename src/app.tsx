import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Grommet} from 'grommet'
import themes from './themes.json'
import Home from './pages/Home';

function render() {
 ReactDOM.render(
    <React.StrictMode>
      <Grommet theme={themes}>
      <Home/>
      </Grommet>
    </React.StrictMode>,
    document.getElementById('app')
);
}

render();