import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import useColor from '../hooks/useColor';

export const ColorContext = React.createContext({
  color: '',
  randomColor: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [context] = useColor();

  if (context.color === '') {
    return null;
  }
  return (
    <ColorContext.Provider value={context}>
      <Component {...pageProps} />
    </ColorContext.Provider>
  );
}

export default MyApp;
