import React, { useRef, useEffect } from 'react';

export const useClickOutside = (handler: Function) => {
  const ref = useRef(null);

  const handleClickOutside = (event: { target: any }) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return { ref };
};
