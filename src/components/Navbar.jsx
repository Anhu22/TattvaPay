import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 10%;
  background:white;
  position:sticky;
  top:0;
  z-index:100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 1px solid #ff7a00;
  
  @media (max-width: 768px) {
    padding: 15px 5%;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 3%;
  }
`;

const Logo = styled.h2`
  font-weight:700;
  font-size: 24px;
  
  span {
    color: #ff7a00;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Links = styled.div`
  display:flex;
  gap:30px;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
  }
  
  @media (max-width: 480px) {
    gap: 15px;
  }

  a{
    text-decoration:none;
    color:#333;
    font-weight:500;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;

const Buttons = styled.div`
  display:flex;
  gap:10px;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Login = styled.button`
  background:rgba(255, 122, 0, 0.1);
  color:#ff7a00;
  padding:8px 16px;
  border-radius:10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 13px;
  }
`;

const BuyNow = styled.button`
  background:#ff7a00;
  color:white;
  padding:8px 16px;
  border-radius:10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 13px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleBuyNow = () => {
    navigate("/buynow");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Nav>
      <Logo>Tattvam<span>Pay</span></Logo>

      <Links>
        <a href="#features">Features</a>
        <a href="#steps">How it works</a>
        <a href="#demo">Live Demo</a>
        {/*<a href="/dashboard">Dashboard</a>*/}
      </Links>

      <Buttons>
          <Login onClick={handleLogin}>Login</Login>
        <BuyNow onClick={handleBuyNow} >Buy Now</BuyNow>
      </Buttons>
    </Nav>
  );
};

export default Navbar;