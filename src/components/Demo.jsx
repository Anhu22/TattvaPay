import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 48px;
    font-weight: 800;
    background: #1a1a1a;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  p {
    font-size: 18px;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const DemoCard = styled.div`
  background: white;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(255, 122, 0, 0.08);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff7a00, #ffb347);
  }
`;

const DemoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 40px;
    gap: 32px;
  }
  
  @media (max-width: 480px) {
    padding: 24px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 20px;
    line-height: 1.3;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 16px;
    color: #666;
    margin-bottom: 32px;
    line-height: 1.7;
  }
`;

const FeatureList = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  span {
    font-size: 14px;
    color: #4a4a4a;
  }
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ff7a00;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #ff7a00, #ff9f4b);
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px rgba(255, 122, 0, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(255, 122, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  background: white;
  color: #ff7a00;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  border: 2px solid #ff7a00;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fff5eb;
    transform: translateY(-2px);
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 24px;
  border: 2px solid #ff7a00;
  padding: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #ff7a00 0%, transparent 70%);
    opacity: 0.1;
    border-radius: 50%;
  }
`;

const QRWrapper = styled.div`
  background: white;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 122, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    max-width: 200px;
    height: auto;
    display: block;
    
    @media (max-width: 480px) {
      max-width: 160px;
    }
  }
`;

const QRTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 16px;
  text-align: center;
`;

const Badge = styled.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff7a00;
  color: white;
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 12px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }
`;

const Stat = styled.div`
  text-align: center;
  
  h4 {
    font-size: 32px;
    font-weight: 800;
    color: #ff7a00;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  
  p {
    font-size: 14px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const Demo = () => {
  const navigate = useNavigate();
  const handleStartDemo = () => {
    navigate("/start-demo");
  };

  return (
    <Section id="demo">
      <Container>
        <Header>
          <h2>Experience Live Demo</h2>
          <p>See how our payment solution works in real-time with our interactive demo</p>
        </Header>
        
        <DemoCard>
          <DemoContent>
            <LeftContent>
              <h3>Try Our Payment Solution</h3>
              <p>
                Experience the future of payments with our live demo. Scan the QR code 
                to initiate a test transaction and see how seamless our platform really is.
              </p>
              
              <FeatureList>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Instant payments</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Secure transactions</span>
                </Feature>
                <Feature>
                  <FeatureIcon>✓</FeatureIcon>
                  <span>Real-time updates</span>
                </Feature>
              </FeatureList>
              
              <ButtonGroup>
                <PrimaryButton onClick={handleStartDemo}>
                  Start Demo
                </PrimaryButton>
                <SecondaryButton>
                  Learn More
                </SecondaryButton>
              </ButtonGroup>
            </LeftContent>
            
            <RightContent>
              <Badge>Scan to try</Badge>
              <QRWrapper>
                <img src="/qr-code.png" alt="QR Code for Demo" />
              </QRWrapper>
              <QRTitle>Scan with your phone camera</QRTitle>
            </RightContent>
          </DemoContent>
        </DemoCard>
        
        <StatsContainer>
          <Stat>
            <h4>2.5s</h4>
            <p>Average transaction time</p>
          </Stat>
          <Stat>
            <h4>99.9%</h4>
            <p>Success rate</p>
          </Stat>
          <Stat>
            <h4>24/7</h4>
            <p>Live support</p>
          </Stat>
          <Stat>
            <h4>10k+</h4>
            <p>Daily transactions</p>
          </Stat>
        </StatsContainer>
      </Container>
    </Section>
  );
};

export default Demo;