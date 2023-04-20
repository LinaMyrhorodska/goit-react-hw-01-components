import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    lightgrey: '#f2f2f2',
    grey: '#e5e5e5',
    darkgrey: '#acacac',
    accent: '#794d20',
    lightaccent: '#cd8d55',
    main: '#efe1ce',
    red: '#e62e00',
    green: '#009933',
  },
  radius: {
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    round: '50%',
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
