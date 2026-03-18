// Device Detection Utility
export const detectDevice = () => {
  const userAgent = navigator.userAgent;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  // Device detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)|Tablet/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;
  
  // Specific device detection
  const isiPhone = /iPhone/i.test(userAgent);
  const isiPad = /iPad/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);
  const isSmallPhone = width <= 380;
  const isLargePhone = width > 380 && width <= 480;
  const isSmallTablet = width > 480 && width <= 768;
  const isLargeTablet = width > 768 && width <= 1024;
  const isSmallDesktop = width > 1024 && width <= 1366;
  const isLargeDesktop = width > 1366;
  
  // Orientation detection
  const isPortrait = height > width;
  const isLandscape = width > height;
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    isiPhone,
    isiPad,
    isAndroid,
    isSmallPhone,
    isLargePhone,
    isSmallTablet,
    isLargeTablet,
    isSmallDesktop,
    isLargeDesktop,
    isPortrait,
    isLandscape,
    width,
    height,
    deviceType: isSmallPhone ? 'small-phone' :
               isLargePhone ? 'large-phone' :
               isSmallTablet ? 'small-tablet' :
               isLargeTablet ? 'large-tablet' :
               isSmallDesktop ? 'small-desktop' :
               isLargeDesktop ? 'large-desktop' : 'unknown'
  };
};

export const getDeviceSpecificStyles = () => {
  const device = detectDevice();
  
  return {
    // Layout adjustments based on device
    layout: {
      flexDirection: device.isPortrait ? 'column' : 'row',
      padding: device.isSmallPhone ? '8px' :
                device.isLargePhone ? '12px' :
                device.isSmallTablet ? '16px' :
                device.isLargeTablet ? '20px' :
                device.isSmallDesktop ? '24px' :
                device.isLargeDesktop ? '32px' : '16px'
    },
    
    // Typography adjustments
    typography: {
      fontSize: device.isSmallPhone ? '12px' :
                device.isLargePhone ? '14px' :
                device.isSmallTablet ? '15px' :
                device.isLargeTablet ? '16px' :
                device.isSmallDesktop ? '16px' :
                device.isLargeDesktop ? '18px' : '16px'
    },
    
    // Grid adjustments
    grid: {
      columns: device.isSmallPhone ? 1 :
               device.isLargePhone ? 1 :
               device.isSmallTablet ? 2 :
               device.isLargeTablet ? 2 :
               device.isSmallDesktop ? 3 :
               device.isLargeDesktop ? 4 : 3,
      gap: device.isSmallPhone ? '8px' :
            device.isLargePhone ? '10px' :
            device.isSmallTablet ? '12px' :
            device.isLargeTablet ? '15px' :
            device.isSmallDesktop ? '18px' :
            device.isLargeDesktop ? '20px' : '15px'
    },
    
    // Component sizing
    sizing: {
      cardPadding: device.isSmallPhone ? '12px' :
                  device.isLargePhone ? '16px' :
                  device.isSmallTablet ? '20px' :
                  device.isLargeTablet ? '24px' :
                  device.isSmallDesktop ? '24px' :
                  device.isLargeDesktop ? '32px' : '20px',
      
      buttonHeight: device.isSmallPhone ? '40px' :
                   device.isLargePhone ? '44px' :
                   device.isSmallTablet ? '48px' :
                   device.isLargeTablet ? '48px' :
                   device.isSmallDesktop ? '48px' :
                   device.isLargeDesktop ? '52px' : '48px',
      
      inputHeight: device.isSmallPhone ? '36px' :
                  device.isLargePhone ? '40px' :
                  device.isSmallTablet ? '44px' :
                  device.isLargeTablet ? '44px' :
                  device.isSmallDesktop ? '44px' :
                  device.isLargeDesktop ? '48px' : '44px'
    }
  };
};

export const useDeviceDetection = () => {
  const [device, setDevice] = React.useState(detectDevice());
  
  React.useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);
  
  return device;
};
