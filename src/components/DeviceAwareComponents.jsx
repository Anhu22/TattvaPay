import styled, { css } from 'styled-components';
import { getDeviceSpecificStyles } from '../utils/deviceDetection.jsx';
import React from 'react';

// Device-aware styled component factory
export const createDeviceAwareStyles = (baseStyles) => {
  const deviceStyles = getDeviceSpecificStyles();
  
  return css`
    ${baseStyles}
    
    /* Device-specific adjustments */
    ${deviceStyles.layout && css`
      flex-direction: ${deviceStyles.layout.flexDirection};
      padding: ${deviceStyles.layout.padding};
    `}
    
    ${deviceStyles.typography && css`
      font-size: ${deviceStyles.typography.fontSize};
    `}
    
    ${deviceStyles.grid && css`
      grid-template-columns: repeat(${deviceStyles.grid.columns}, 1fr);
      gap: ${deviceStyles.grid.gap};
    `}
    
    ${deviceStyles.sizing && css`
      padding: ${deviceStyles.sizing.cardPadding};
    `}
    
    /* Small phone specific */
    @media (max-width: 380px) {
      ${baseStyles.smallPhone || ''}
    }
    
    /* Large phone specific */
    @media (min-width: 381px) and (max-width: 480px) {
      ${baseStyles.largePhone || ''}
    }
    
    /* Small tablet specific */
    @media (min-width: 481px) and (max-width: 768px) {
      ${baseStyles.smallTablet || ''}
    }
    
    /* Large tablet specific */
    @media (min-width: 769px) and (max-width: 1024px) {
      ${baseStyles.largeTablet || ''}
    }
    
    /* Small desktop specific */
    @media (min-width: 1025px) and (max-width: 1366px) {
      ${baseStyles.smallDesktop || ''}
    }
    
    /* Large desktop specific */
    @media (min-width: 1367px) {
      ${baseStyles.largeDesktop || ''}
    }
    
    /* Portrait specific */
    @media (orientation: portrait) {
      ${baseStyles.portrait || ''}
    }
    
    /* Landscape specific */
    @media (orientation: landscape) {
      ${baseStyles.landscape || ''}
    }
  `;
};

// Device-aware grid component
export const DeviceAwareGrid = styled.div`
  display: grid;
  ${createDeviceAwareStyles({
    grid: true,
    smallPhone: css`
      grid-template-columns: 1fr;
      gap: 8px;
    `,
    largePhone: css`
      grid-template-columns: 1fr;
      gap: 10px;
    `,
    smallTablet: css`
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    `,
    largeTablet: css`
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    `,
    smallDesktop: css`
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    `,
    largeDesktop: css`
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    `,
    portrait: css`
      gap: 12px;
    `,
    landscape: css`
      gap: 16px;
    `
  })}
`;

// Device-aware container component
export const DeviceAwareContainer = styled.div`
  ${createDeviceAwareStyles({
    layout: true,
    smallPhone: css`
      padding: 16px;
    `,
    largePhone: css`
      padding: 20px;
    `,
    smallTablet: css`
      padding: 24px;
    `,
    largeTablet: css`
      padding: 32px;
    `,
    smallDesktop: css`
      padding: 40px;
    `,
    largeDesktop: css`
      padding: 48px;
    `
  })}
`;

// Device-aware card component
export const DeviceAwareCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  ${createDeviceAwareStyles({
    sizing: true,
    smallPhone: css`
      padding: 12px;
    `,
    largePhone: css`
      padding: 16px;
    `,
    smallTablet: css`
      padding: 20px;
    `,
    largeTablet: css`
      padding: 24px;
    `,
    smallDesktop: css`
      padding: 28px;
    `,
    largeDesktop: css`
      padding: 32px;
    `
  })}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Device-aware button component
export const DeviceAwareButton = styled.button`
  background: #ff7a00;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${createDeviceAwareStyles({
    sizing: true,
    smallPhone: css`
      padding: 10px 16px;
      font-size: 12px;
    `,
    largePhone: css`
      padding: 12px 20px;
      font-size: 14px;
    `,
    smallTablet: css`
      padding: 14px 24px;
      font-size: 15px;
    `,
    largeTablet: css`
      padding: 16px 28px;
      font-size: 16px;
    `,
    smallDesktop: css`
      padding: 16px 32px;
      font-size: 16px;
    `,
    largeDesktop: css`
      padding: 18px 36px;
      font-size: 16px;
    `
  })}
  
  &:hover {
    background: #e66a00;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Device-aware input component
export const DeviceAwareInput = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.3s ease;
  width: 100%;
  
  ${createDeviceAwareStyles({
    sizing: true,
    smallPhone: css`
      padding: 10px 12px;
      font-size: 14px;
    `,
    largePhone: css`
      padding: 12px 16px;
      font-size: 15px;
    `,
    smallTablet: css`
      padding: 14px 18px;
      font-size: 16px;
    `,
    largeTablet: css`
      padding: 16px 20px;
      font-size: 16px;
    `,
    smallDesktop: css`
      padding: 16px 22px;
      font-size: 16px;
    `,
    largeDesktop: css`
      padding: 18px 24px;
      font-size: 16px;
    `
  })}
  
  &:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;
