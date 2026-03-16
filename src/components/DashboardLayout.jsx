import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home,  
  QrCode, 
  Settings, 
  Package,
  Wallet,
  DollarSign
} from "lucide-react";

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8f9fc;
  
  /* Tablet and smaller */
  @media (max-width: 1200px) {
    /* Keep flex layout for tablets */
  }
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
    min-height: 100vh;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    flex-direction: column;
    min-height: 100vh;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    flex-direction: column;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    flex-direction: column;
  }
`;


const TopNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 4px;
  }
  
  @media (max-width: 480px) {
    gap: 2px;
  }
  
  @media (max-height: 600px) and (orientation: portrait) {
    flex-wrap: wrap;
    gap: 3px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    flex-wrap: wrap;
    gap: 2px;
  }
`;

const NavItem = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
    gap: 4px;
  }
  
  &:hover {
    background: #f8f9fa;
    color: #333;
  }
  
  &.active {
    color: #ff7a00;
    font-weight: 600;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 3px;
      background: #ff7a00;
      border-radius: 2px;
      
      @media (max-width: 768px) {
        bottom: -4px;
        height: 2px;
      }
    }
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding-top: 70px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding-top: 60px;
  }
  
  @media (max-width: 480px) {
    padding-top: 50px;
  }
  
  @media (max-height: 600px) and (orientation: portrait) {
    padding-top: 55px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    padding-top: 45px;
  }
`;

const TopBar = styled.div`
  height: 70px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
  }
  
  @media (max-width: 480px) {
    height: 50px;
    padding: 0 12px;
  }
  
  @media (max-height: 600px) and (orientation: portrait) {
    height: 55px;
    padding: 0 14px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    height: 45px;
    padding: 0 10px;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const TopBarLogo = styled.h2`
  font-weight:700;
  font-size: 20px;
  
  span {
    color: #ff7a00;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  position: relative;
  
  &:hover {
    background: #f8f9fa;
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background: #ff7a00;
  border-radius: 50%;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 50px;
  background: #f8f9fa;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff7a00, #ff9f4b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  .name {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    line-height: 1.2;
  }
  
  .role {
    font-size: 12px;
    color: #666;
    line-height: 1.2;
  }
`;

const ContentArea = styled.div`
  padding: 24px 32px;
  max-width: 1400px;
  margin: 0 auto;
`;

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('dashboard');
  
  // Get user data from localStorage
  const [user, setUser] = useState({
    name: 'User',
    initials: 'U',
    role: 'Business Owner'
  });
  
  // Function to generate initials from name
  const getInitials = (name) => {
    if (!name) return 'U';
    const words = name.split(' ');
    if (words.length >= 2) {
      return words[0][0].toUpperCase() + words[1][0].toUpperCase();
    } else {
      return name.substring(0, 2).toUpperCase();
    }
  };
  
  // Load user data from localStorage on component mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('tattvamPayCurrentUser') || '{}');
    if (currentUser.isLoggedIn && currentUser.fullName) {
      setUser({
        name: currentUser.fullName,
        initials: getInitials(currentUser.fullName),
        role: 'Business Owner' // You can store role in localStorage too if needed
      });
    }
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    
    // Navigate to the appropriate route
    switch(menu) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'qr-codes':
        navigate('/qr-generator');
        break;
      case 'payments':
        navigate('/payments');
        break;
      case 'devices':
        navigate('/devices');
        break;
      case 'settlements':
        navigate('/settlements');
        break;
      case 'settings':
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  return (
    <LayoutContainer>
      <TopBar>
        <TopBarLeft>
          <TopBarLogo>
            Tattvam<span>Pay</span>
          </TopBarLogo>
          
          {/*<TopNavigation>
            <NavItem 
              className={activeMenu === 'dashboard' ? 'active' : ''}
              onClick={() => handleMenuClick('dashboard')}
            >
              <Home />
              <span>Dashboard</span>
            </NavItem>
                    
            <NavItem 
              className={activeMenu === 'qr-codes' ? 'active' : ''}
              onClick={() => handleMenuClick('qr-codes')}
            >
              <QrCode />
              <span>QR Generator</span>
            </NavItem>
          
            <NavItem 
              className={activeMenu === 'payments' ? 'active' : ''}
              onClick={() => handleMenuClick('payments')}
            >
              <DollarSign />
              <span>Payments</span>
            </NavItem>
                    
            <NavItem 
              className={activeMenu === 'devices' ? 'active' : ''}
              onClick={() => handleMenuClick('devices')}
            >
              <Package />
              <span>Devices</span>
            </NavItem>
          
            <NavItem 
              className={activeMenu === 'settlements' ? 'active' : ''}
              onClick={() => handleMenuClick('settlements')}
            >
              <Wallet />
              <span>Settlements</span>
            </NavItem>
          
            <NavItem 
              className={activeMenu === 'settings' ? 'active' : ''}
              onClick={() => handleMenuClick('settings')}
            >
              <Settings />
              <span>Settings</span>
            </NavItem>
          </TopNavigation>*/}
        </TopBarLeft>

        {/*<RightSection>
          <IconButton>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <NotificationBadge />
          </IconButton>
          
          <IconButton>
            <Settings />
          </IconButton>
          
          <UserSection>
            <UserAvatar>{user.initials}</UserAvatar>
            <UserInfo>
              <span className="name">{user.name}</span>
              <span className="role">{user.role}</span>
            </UserInfo>
          </UserSection>
        </RightSection>*/}
      </TopBar>

      <MainContent>
        <ContentArea>
          {children}
        </ContentArea>
      </MainContent>
    </LayoutContainer>
  );
};

export default DashboardLayout;
