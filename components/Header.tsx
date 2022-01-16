import { RefreshCw } from 'react-feather';
import React from 'react';
import Logo from './Logo';
import { ColorContext } from '../pages/_app';
import Button from './Button';

const Header = () => (
  <ColorContext.Consumer>
    {({ randomColor }) => (
      <div className="flex flex-row justify-between top-0 py-10 px-8 mx-auto w-full max-w-5xl">
        <Logo />
        <Button
          ariaLabel="Random page color"
          compact
          onClick={() => randomColor()}
          endIcon={<RefreshCw />}
        />
      </div>
    )}
  </ColorContext.Consumer>
);

export default Header;
