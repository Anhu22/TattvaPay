import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Package, Truck, Download, ArrowRight, HelpCircle } from "lucide-react";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  background: white;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 48px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 32px;
  
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
    
    span {
      color: #ff7a00;
    }
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #e6f7e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  
  svg {
    width: 48px;
    height: 48px;
    color: #00a86b;
  }
`;

const SuccessTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const SuccessSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
`;

const DeviceImage = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #f0f0f0);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  svg {
    width: 48px;
    height: 48px;
    color: #ff7a00;
  }
  
  span {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

const StatusCard = styled.div`
  background: #f8f9fa;
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 32px;
  text-align: left;
`;

const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f0f0f0;
  
  svg {
    width: 24px;
    height: 24px;
    color: #ff7a00;
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

const StatusGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .label {
    color: #666;
    font-size: 15px;
    font-weight: 500;
  }
  
  .value {
    color: #1a1a1a;
    font-size: 16px;
    font-weight: 600;
    
    &.highlight {
      color: #ff7a00;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #f0f0f0;
  margin: 32px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  flex: 1;
  background: #ff7a00;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e66a00;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 122, 0, 0.2);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background: white;
  color: #ff7a00;
  padding: 16px 24px;
  border: 2px solid #ff7a00;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #fff5eb;
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const HelpSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 24px 0;
  
  svg {
    width: 18px;
    height: 18px;
    color: #ff7a00;
  }
  
  a {
    color: #ff7a00;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  span {
    color: #666;
    font-size: 15px;
  }
`;

const Footer = styled.div`
  margin-top: 32px;
  padding-top: 24px;
  border-top: 2px solid #f0f0f0;
`;

const PoweredBy = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  span {
    color: #ff7a00;
    font-weight: 600;
  }
`;

const Copyright = styled.div`
  font-size: 13px;
  color: #aaa;
`;

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <Header>
        <h1>TATTVAM<span>PAY</span></h1>
      </Header>

      <SuccessIcon>
        <CheckCircle />
      </SuccessIcon>

      <SuccessTitle>Order Placed Successfully!</SuccessTitle>
      <SuccessSubtitle>
        Your Smart QR Device is on its way to your business.
      </SuccessSubtitle>

      <DeviceImage>
        <Package />
        <span>Smart QR Device (Gen 1)</span>
      </DeviceImage>

      <StatusCard>
        <StatusHeader>
          <Package />
          <h3>PROCESSING</h3>
        </StatusHeader>
        
        <StatusGrid>
          <StatusItem>
            <span className="label">ORDER ID:</span>
            <span className="value highlight">#MC-88241</span>
          </StatusItem>
          
          <StatusItem>
            <span className="label">ESTIMATED DELIVERY:</span>
            <span className="value">3-5 Business Days</span>
          </StatusItem>
          
          <StatusItem>
            <span className="label">SHIPPING TO:</span>
            <span className="value">Alex Johnson, Mumbai</span>
          </StatusItem>
        </StatusGrid>

        <Divider />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#888' }}>
          <span>📦 Order confirmed</span>
          <span>⚡ Processing</span>
          <span>🚚 Shipped</span>
          <span>✅ Delivered</span>
        </div>
      </StatusCard>

      <ButtonGroup>
        <PrimaryButton onClick={handleGoToDashboard}>
          Go to Dashboard <ArrowRight />
        </PrimaryButton>
        <SecondaryButton>
          <Download /> Download Invoice
        </SecondaryButton>
      </ButtonGroup>

      <HelpSection>
        <HelpCircle />
        <span>Need help?</span>
        <a href="#">Contact Support</a>
      </HelpSection>

      <Footer>
        <PoweredBy>
          POWERED BY <span>TATTVASPHERE</span>
        </PoweredBy>
        <Copyright>
          © 2024 TattvamPay. All rights reserved.
        </Copyright>
      </Footer>
    </Container>
  );
};

export default OrderSuccess;