import './index.css';
import { ColorModeScript, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react';
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
      <ChakraProvider theme={theme}>
        <ReduxProvider store={store}>
         <ColorModeScript />
          <App />
        </ReduxProvider>
      </ChakraProvider>
  </StrictMode>
);


