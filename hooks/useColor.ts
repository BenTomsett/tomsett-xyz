import { useEffect, useState } from 'react';

export const colors = [
  'red',
  'orange',
  'amber',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

const useColor = () => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  const randomColor = () => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const context = {
    color,
    randomColor,
  };

  return [context];
};

export default useColor;
