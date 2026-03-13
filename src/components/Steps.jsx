import styled from "styled-components";
import { ScanLine, Wallet, CheckCircle, } from "lucide-react";

const Section = styled.section`
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  max-width: 1100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  h2 {
    font-size: 52px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  .highlight {
    color: #ff7a00;
    position: relative;
    display: inline-block;
  }
  
  p {
    font-size: 18px;
    color: #666;
    line-height: 1.6;
  }
`;

const StepsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  position: relative;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const StepConnector = styled.div`
  position: absolute;
  top: 80px;
  left: 15%;
  right: 15%;
  height: 2px;
  background: linear-gradient(90deg, #ff7a00 0%, #ffb347 50%, #e0e0e0 100%);
  z-index: 1;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const StepCard = styled.div`
  background: white;
  padding: 8px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &.step-1 {
    background: white;
    border: 2px solid white;
    
  }
  
  &.step-2 {
    background: white;
    border: 2px solid white;
  }
  
  &.step-3 {
    background: white;
    border: 2px solid white;
    
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(255, 122, 0, 0.1);
    border-color: rgba(255, 122, 0, 0.2);
    
    .step-number {
      background: #ff7a00;
      color: white;
      border-color: #ff7a00;
    }
    
    .icon-wrapper {
      background: #ff7a00;
      color: white;
    }
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -15px;
  left: 30px;
  width: 36px;
  height: 36px;
  background: white;
  border: 2px solid #ff7a00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: #ff7a00;
  transition: all 0.3s ease;
  z-index: 3;
  
  &.step-1-number {
    top: -15px;
    right: -15px;
    left: auto;
    background: #ff7a00;
    color: white;
    border: 2px solid white;
  }
  
  &.step-2-number {
    top: -15px;
    right: -15px;
    left: auto;
    background: #ff7a00;
    color: white;
    border: 2px solid white;
  }
  
  &.step-3-number {
    top: -15px;
    right: -15px;
    left: auto;
    background: #ff7a00;
    color: white;
    border: 2px solid white;
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: ${props => {
    switch(props.$step) {
      case 1: return 'linear-gradient(135deg, #FFF3E8, #FFE4D6)';
      case 2: return 'linear-gradient(135deg, #E8F0FE, #D9E9FF)';
      case 3: return 'linear-gradient(135deg, #E8F7E8, #D1EBD1)';
      default: return '#f0f0f0';
    }
  }};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7a00;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  
  svg {
    width: 36px;
    height: 36px;
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
  }
  
  p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const TimeBadge = styled.div`
  display: inline-block;
  padding: 6px 12px;
  background: rgba(255, 122, 0, 0.08);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: #ff7a00;
`;


const Steps = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Enter Amount",
      description: "Just punch in the bill amount on the keypad, as easy as a calculator.",
      time: "5 seconds",
      gradient: "linear-gradient(135deg, #FFF3E8, #FFE4D6)"
    },
    {
      icon: ScanLine,
      title: "Customer Scans",
      description: "Customer scans the QR code with their phone camera or payment app.",
      time: "2 seconds",
      gradient: "linear-gradient(135deg, #E8F0FE, #D9E9FF)"
    },
    {
      icon: CheckCircle,
      title: "Get Paid Instantly",
      description: "Funds are settled instantly with instant confirmation and receipt.",
      time: "Instant",
      gradient: "linear-gradient(135deg, #E8F7E8, #D1EBD1)"
    }
  ];

  return (
    <Section id="steps">
      <Container>
        <Header>
          <h2>
            Simpler than a handshake.
          </h2>
        </Header>

        <StepsGrid>
          <StepConnector />
          
          {steps.map((step, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <StepCard className={index === 0 ? 'step-1' : index === 1 ? 'step-2' : index === 2 ? 'step-3' : ''}>
                <StepNumber className={`step-number ${index === 0 ? 'step-1-number' : index === 1 ? 'step-2-number' : index === 2 ? 'step-3-number' : ''}`}>
                  {index + 1}
                </StepNumber>
                
                {(index === 0 || index === 1 || index === 2) ? (
                  <img 
                    src={index === 0 ? "/Step-1.png" : index === 1 ? "/Step-2.png" : "/Step-3.png"} 
                    alt={`Step ${index + 1}`} 
                    style={{
                      width: '250px',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      marginBottom: '24px'
                    }}
                  />
                ) : (
                  <IconWrapper className="icon-wrapper" $step={index + 1}>
                    <step.icon />
                  </IconWrapper>
                )}
              </StepCard>
              
              {(index === 0 || index === 1 || index === 2) && (
                <CardContent style={{ marginTop: '20px', textAlign: 'center', width: '100%' }}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <TimeBadge>Takes {step.time}</TimeBadge>
                </CardContent>
              )}
            </div>
          ))}
        </StepsGrid>
      </Container>
    </Section>
  );
};

export default Steps;