import React from 'react';
import styled from 'styled-components';

const ThrobberStyle = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #73daaf;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// TODO - allow different sizes
export function Throbber() {
  return (
    <ThrobberStyle />
  );
}
