import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './scss/Style.scss';
//CONTEXT-API
import { StateProvider } from './StateContext';

ReactDOM.render(
<StateProvider>
<App/>
</StateProvider>
, document.getElementById("root"));