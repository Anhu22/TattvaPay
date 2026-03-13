import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  background:#1a1a1a;
  color:white;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:60px;
  padding:80px 10%;
`;

const Left = styled.div`
  flex:1;
  
  h2 {
    font-size:54px;
    font-weight:700;
    line-height:1.3;
    margin-bottom:32px;
  }
  
  h3 {
    color:#ff7a00;
    font-size:54px;
    font-weight:500;
    line-height:1.3;
    margin-bottom:32px;
  }
`;

const PrimaryButton = styled.button`
  background:#ff7a00;
  color:white;
  margin-top:20px;
  padding:14px 28px;
  border-radius:25px;
  font-weight:600;
  font-size:16px;
  transition:background 0.3s ease;
  
  &:hover {
    background:#e66a00;
  }
`;

const Right = styled.div`
  flex:1;
  display:flex;
  justify-content:center;
`;

const ControlImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
`;

const LeftContainer = styled.div`
  background: #252525c3;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 12px;
  text-align: left;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;

  &:hover {
    background: #333;
    border: 2px solid #ff7a00;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }
    
  p {
    font-size: 14px;
    color: #aaa;
  }
`;

const ControlSection = () => {
  const navigate = useNavigate();
  const handleTryWebDashboard = () => {
    navigate("/dashboard");
  };
  return (
    
    <Section>
      <Left>
        <h2>
          Control your business,</h2>
          <h3>
          anywhere in the world.
        </h3>
        <LeftContainer>
          <h6>Live Sales Feed</h6>
          <p>Watch transactions happen in real-time with merchant-verified timestamp</p>
        </LeftContainer>
        <LeftContainer>
          <h6>Multi-Store View</h6>
          <p>Manage one cart or a whole chain of bakeries from one single app</p>
        </LeftContainer>
        
        <PrimaryButton onClick={handleTryWebDashboard}>
          Try Web Dashboard
        </PrimaryButton>
      </Left>

      <Right>
        <ControlImage src="/Home-control.png" alt="Control Dashboard" />
      </Right>
    </Section>
  );
};

export default ControlSection;