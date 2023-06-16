import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);