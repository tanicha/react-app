import React from 'react';
import { createRoot } from 'react-dom/client';
import reactDOM from 'react-dom';
import App from '/client/App';

// const root = createRoot(document.getElementById('root'));
// root.render(<h1>This is JSX, not HTML</h1>);

reactDOM.render(
    <App/>,
    document.getElementById('root')
)