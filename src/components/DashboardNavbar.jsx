import styled from "styled-components";
import { Search, Bell, Settings, User, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Logo = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  
  span {
    color: #ff7a00;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 50px;
  padding: 8px 16px;
  width: 300px;
  border: 1px solid #f0f0f0;
  
  svg {
    width: 18px;
    height: 18px;
    color: #888;
    margin-right: 8px;
  }
  
  input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
    font-size: 14px;
    
    &::placeholder {
      color: #aaa;
    }
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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  svg {
    width: 24px;
    height: 24px;
    color: #666;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const DashboardNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <LeftSection>
        <Logo>TATTVAM <span>PAY</span></Logo>
      </LeftSection>

      <RightSection>
        <IconButton>
          <Bell />
          <NotificationBadge />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <UserSection>
          <UserAvatar>VY</UserAvatar>
          <UserInfo>
            <span className="name">Va yashodary</span>
            <span className="role">Business Owner</span>
          </UserInfo>
        </UserSection>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </MobileMenuButton>
      </RightSection>
    </Nav>
  );
};

export default DashboardNavbar;
