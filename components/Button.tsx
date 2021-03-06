import React from 'react';
import { ColorContext } from '../pages/_app';

export interface ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  text?: string;
  onClick: () => void;
  compact?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  startIcon, endIcon, text, onClick, compact, ariaLabel,
}) => (
  <ColorContext.Consumer>
    {({ color }) => (
      <button
        aria-label={ariaLabel}
        type="button"
        onClick={onClick}
        className={`flex items-center justify-center gap-3 ${compact ? 'h-12 w-12' : 'py-2 px-8'} rounded-md text-lg font-semibold text-${color}-800 dark:text-${color}-600 bg-${color}-100 dark:bg-${color}-600 dark:bg-opacity-20 border-2 border-transparent hover:border-${color}-600 ${compact ? 'hover:shadow-md' : 'hover:shadow-xl'} hover:shadow-${color}-300 dark:hover:shadow-${color}-600 duration-200`}
      >
        {startIcon}
        {text}
        {endIcon}
      </button>
    )}
  </ColorContext.Consumer>
);

export default Button;
