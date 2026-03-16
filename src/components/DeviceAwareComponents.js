import styled, { css } from 'styled-components';
import { getDeviceSpecificStyles } from '../utils/deviceDetection';

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
      gap: 15px;
    `,
    smallDesktop: css`
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    `,
    largeDesktop: css`
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    `,
    portrait: css`
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    `
  })}
`;

// Device-aware container component
export const DeviceAwareContainer = styled.div`
  display: flex;
  ${createDeviceAwareStyles({
    layout: true,
    smallPhone: css`
      flex-direction: column;
      padding: 8px;
      gap: 8px;
    `,
    largePhone: css`
      flex-direction: column;
      padding: 12px;
      gap: 12px;
    `,
    smallTablet: css`
      flex-direction: column;
      padding: 16px;
      gap: 16px;
    `,
    largeTablet: css`
      flex-direction: row;
      padding: 20px;
      gap: 20px;
    `,
    smallDesktop: css`
      flex-direction: row;
      padding: 24px;
      gap: 24px;
    `,
    largeDesktop: css`
      flex-direction: row;
      padding: 32px;
      gap: 32px;
    `,
    portrait: css`
      flex-direction: column;
      gap: 15px;
    `,
    landscape: css`
      flex-direction: row;
      gap: 20px;
    `
  })}
`;

// Device-aware card component
export const DeviceAwareCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  ${createDeviceAwareStyles({
    sizing: true,
    smallPhone: css`
      padding: 12px;
      border-radius: 12px;
    `,
    largePhone: css`
      padding: 16px;
      border-radius: 14px;
    `,
    smallTablet: css`
      padding: 20px;
      border-radius: 16px;
    `,
    largeTablet: css`
      padding: 24px;
      border-radius: 18px;
    `,
    smallDesktop: css`
      padding: 24px;
      border-radius: 16px;
    `,
    largeDesktop: css`
      padding: 32px;
      border-radius: 20px;
    `
  })}
`;

// Device-aware button component
export const DeviceAwareButton = styled.button`
  background: #ff7a00;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  
  ${createDeviceAwareStyles({
    typography: true,
    smallPhone: css`
      height: 40px;
      padding: 0 12px;
      font-size: 12px;
    `,
    largePhone: css`
      height: 44px;
      padding: 0 16px;
      font-size: 14px;
    `,
    smallTablet: css`
      height: 48px;
      padding: 0 20px;
      font-size: 15px;
    `,
    largeTablet: css`
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
    `,
    smallDesktop: css`
      height: 48px;
      padding: 0 24px;
      font-size: 16px;
    `,
    largeDesktop: css`
      height: 52px;
      padding: 0 32px;
      font-size: 18px;
    `
  })}
  
  &:hover {
    background: #e66a00;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(255, 122, 0, 0.1);
  }
`;

// Device-aware input component
export const DeviceAwareInput = styled.input`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;
  
  ${createDeviceAwareStyles({
    typography: true,
    smallPhone: css`
      height: 36px;
      padding: 0 12px;
      font-size: 12px;
    `,
    largePhone: css`
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
    `,
    smallTablet: css`
      height: 44px;
      padding: 0 20px;
      font-size: 15px;
    `,
    largeTablet: css`
      height: 44px;
      padding: 0 20px;
      font-size: 16px;
    `,
    smallDesktop: css`
      height: 44px;
      padding: 0 24px;
      font-size: 16px;
    `,
    largeDesktop: css`
      height: 48px;
      padding: 0 32px;
      font-size: 18px;
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
