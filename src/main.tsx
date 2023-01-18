import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // react-aria not compatible with strict mode
  // https://github.com/adobe/react-spectrum/issues/779
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
);
