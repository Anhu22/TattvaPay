import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { 
  DeviceAwareContainer,
  DeviceAwareButton
} from './DeviceAwareComponents.jsx';

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ff7a00;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const DesktopLogo = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  
  span {
    color: #ff7a00;
  }
  
  @media (max-width: 768px) {
    display: none !important;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (orientation: portrait) and (max-width: 768px) {
    display: none; /* Only hide in mobile portrait */
  }
  
  @media (orientation: landscape) and (max-width: 768px) {
    display: flex; /* Show in mobile landscape */
  }
`;

const MobileLinks = styled.div`
  display: none;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  
  @media (max-width: 768px) {
    display: flex; /* Show links in mobile menu */
  }
  
  @media (orientation: portrait) and (max-width: 768px) {
    display: flex; /* Show links in portrait mode */
  }
`;

const DesktopButtons = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButtons = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px 20px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

// Use device-aware container instead of styled nav
// const Nav = styled.nav`
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
//   padding:20px 10%;
//   background:white;
//   position:sticky;
//   top:0;
//   z-index:100;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//   border-bottom: 1px solid #ff7a00;
//   
//   @media (max-width: 768px) {
//     padding: 15px 5%;
//     flex-wrap: wrap;
//     gap: 10px;
//   }
//   
//   @media (max-width: 480px) {
//     padding: 12px 3%;
//   }
// `;

const MobileHeader = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  /* Hide on all desktop sizes */
  @media (min-width: 769px) {
    display: none !important;
  }
`;

// Use device-aware typography instead of styled components
// const Logo = styled.h2`
//   font-weight:700;
//   font-size: 24px;
//   
//   span {
//     color: #ff7a00;
//   }
//   
//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
//   
//   @media (max-width: 480px) {
//     font-size: 18px;
//   }
// `;
// 
// const Links = styled.div`
//   display:flex;
//   gap:30px;
//   
//   @media (max-width: 768px) {
//     gap: 20px;
//     flex-wrap: wrap;
//   }
//   
//   @media (max-width: 480px) {
//     gap: 15px;
//   }
// 
//   a{
//     text-decoration:none;
//     color:#333;
//     font-weight:500;
//     font-size: 16px;
//     
//     @media (max-width: 768px) {
//       font-size: 14px;
//     }
//     
//     @media (max-width: 480px) {
//       font-size: 13px;
//     }
//   }
// `;
// 
// const Buttons = styled.div`
//   display:flex;
//   gap:10px;
//   
//   @media (max-width: 768px) {
//     gap: 8px;
//   }
//   
//   @media (max-width: 480px) {
//     gap: 6px;
//   }
// `;

// const Login = styled.button`
//   background:rgba(255, 122, 0, 0.1);
//   color:#ff7a00;
//   padding:8px 16px;
//   border-radius:10px;
//   border: none;
//   cursor: pointer;
//   font-weight: 500;
//   
//   @media (max-width: 768px) {
//     padding:6px 12px;
//     font-size:14px;
//   }
//   
//   @media (max-width: 480px) {
//     padding:5px 10px;
//     font-size:13px;
//   }
// `;

// const BuyNow = styled.button`
//   background:#ff7a00;
//   color:white;
//   padding:8px 16px;
//   border-radius:10px;
//   border: none;
//   cursor: pointer;
//   font-weight: 500;
//   
//   @media (max-width: 768px) {
//     padding:6px 12px;
//     font-size:14px;
//   }
//   
//   @media (max-width: 480px) {
//     padding:5px 10px;
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleBuyNow = () => {
    navigate("/dashboard");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <DeviceAwareContainer style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 10%',
      background: 'white',
      position: 'sticky',
      top: '0',
      zIndex: '100',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderBottom: '1px solid #ff7a00'
    }}>
      <MobileHeader>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        <h2 style={{
          fontWeight: '700',
          fontSize: '24px',
          margin: '0'
        }}>
          Tattvam<span style={{ color: '#ff7a00' }}>Pay</span>
        </h2>
      </MobileHeader>

      <DesktopLinks>
        <DesktopLogo>
          Tattvam<span style={{ color: '#ff7a00' }}>Pay</span>
        </DesktopLogo>
        
        <div style={{
          display: 'flex',
          gap: '30px'
        }}>
          <a href="#features" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>Features</a>
          <a href="#steps" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>How it works</a>
          <a href="#demo" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>Live Demo</a>
        </div>
      </DesktopLinks>

      <DesktopButtons>
        <DeviceAwareButton 
          onClick={handleLogin}
          style={{
            background: 'rgba(255, 122, 0, 0.1)',
            color: '#ff7a00'
          }}
        >
          Login
        </DeviceAwareButton>
        <DeviceAwareButton onClick={handleBuyNow}>
          Buy Now
        </DeviceAwareButton>
      </DesktopButtons>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileLinks>
          <a href="#features" onClick={closeMobileMenu} style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>Features</a>
          <a href="#steps" onClick={closeMobileMenu} style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>How it works</a>
          <a href="#demo" onClick={closeMobileMenu} style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            fontSize: '16px'
          }}>Live Demo</a>
        </MobileLinks>
        <MobileButtons>
          <DeviceAwareButton 
            onClick={handleLogin}
            style={{
              background: 'rgba(255, 122, 0, 0.1)',
              color: '#ff7a00'
            }}
          >
            Login
          </DeviceAwareButton>
          <DeviceAwareButton onClick={handleBuyNow}>
            Buy Now
          </DeviceAwareButton>
        </MobileButtons>
      </MobileMenu>
    </DeviceAwareContainer>
  );
};

export default Navbar;