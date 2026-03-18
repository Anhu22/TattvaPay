import React, { useState } from 'react';
import styled from 'styled-components';
import { QrCode, Smartphone, Wifi, Zap, IndianRupee, Hash, ArrowRightCircle, Copy, CheckCircle, TrendingUp, Circle, CreditCard } from 'lucide-react';
import { 
  DeviceAwareContainer, 
  DeviceAwareCard,
  DeviceAwareButton,
  DeviceAwareInput
} from '../components/DeviceAwareComponents';

// Main container - full screen
const Container = styled.div`
  position: fixed;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  @media (max-width: 768px) {
    top: 60px;
    height: calc(100vh - 60px);
  }
  
  @media (max-width: 480px) {
    top: 50px;
    height: calc(100vh - 50px);
  }
`;

// Scrollable content area
const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

// Transparent main container for both columns
const MainContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  
  /* Tablet and smaller */
  @media (max-width: 1200px) {
    gap: 40px;
  }
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
    gap: 30px;
    padding: 0 20px;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding: 0 15px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 0 10px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    flex-direction: column;
    gap: 18px;
    align-items: center;
    padding: 0 8px;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;


const Header = styled.div`
  margin-bottom: 24px;
  
  h1 {
    font-size: 42px;
    font-weight: 700;
    color: #333;
    margin: 0 0 8px 0;
  }
  
  p {
    font-size: 16px;
    color: #666;
    margin: 0;
  }
`;

// Left Column - Positioned in left-center
const LeftColumn = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  width: 480px;
  max-width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  
  /* Tablet and smaller */
  @media (max-width: 1200px) {
    width: 420px;
    padding: 35px;
  }
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    width: 380px;
    padding: 30px;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 100%;
    max-width: 380px;
    padding: 22px;
    border-radius: 20px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;
    max-width: 320px;
    padding: 18px;
    border-radius: 18px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    width: 100%;
    max-width: 280px;
    padding: 15px;
    border-radius: 16px;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    width: 100%;
    max-width: 380px;
    padding: 22px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    width: 100%;
    max-width: 320px;
    padding: 18px;
  }
`;

const Section = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

const AmountDisplay = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    font-size: 36px;
    gap: 6px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 32px;
    gap: 5px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    font-size: 28px;
    gap: 4px;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    font-size: 34px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    font-size: 30px;
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: #1a1a1a;
    
    /* Mobile portrait */
    @media (max-width: 768px) and (orientation: portrait) {
      width: 24px;
      height: 24px;
    }
    
    /* Small mobile portrait */
    @media (max-width: 600px) and (orientation: portrait) {
      width: 20px;
      height: 20px;
    }
    
    /* Very small mobile portrait */
    @media (max-width: 480px) and (orientation: portrait) {
      width: 18px;
      height: 18px;
    }
  }
`;

const InvoiceInfo = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 13px;
    margin-bottom: 16px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    font-size: 12px;
    margin-bottom: 14px;
  }
`;

const InputLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  font-size: 16px;
  color: #1a1a1a;
  background: #ffffff;
  transition: all 0.2s;
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 10px 14px;
    font-size: 13px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    padding: 8px 12px;
    font-size: 12px;
  }
  
  &::placeholder {
    color: #9ca3af;
    font-size: 16px;
    
    /* Mobile portrait */
    @media (max-width: 768px) and (orientation: portrait) {
      font-size: 14px;
    }
    
    /* Small mobile portrait */
    @media (max-width: 600px) and (orientation: portrait) {
      font-size: 13px;
    }
    
    /* Very small mobile portrait */
    @media (max-width: 480px) and (orientation: portrait) {
      font-size: 12px;
    }
  }
  
  &:focus {
    outline: none;
    border-color: #ff7a00;
    box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const PrimaryButton = styled.button`
  flex: 1;
  background: #ff7a00;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(255, 122, 0, 0.2);
  
  &:hover {
    background: #e66a00;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(255, 122, 0, 0.3);
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background: #f3f4f6;
  color: #666;
  border: 1px solid #d1d5db;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }
`;

const StatusCard = styled.div`
  background: #f0fdf4;
  border: 1px solid #a7f3d0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #10b981;
  font-weight: 600;
  font-size: 14px;
`;

const PaymentMethodSelector = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${props => props.className === 'active' ? '#ff7a00' : '#f3f4f6'};
  color: ${props => props.className === 'active' ? 'white' : '#64748b'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.className === 'active' ? '#e66a00' : '#e5e7eb'};
  }
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
`;

// Right Column - Just the image, no container
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    min-height: 300px;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    width: 100%;
    min-height: 350px;
    order: 2;
    margin-top: 20px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    width: 100%;
    min-height: 300px;
    order: 2;
    margin-top: 15px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    width: 100%;
    min-height: 280px;
    order: 2;
    margin-top: 15px;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    width: 100%;
    min-height: 320px;
    order: 2;
    margin-top: 15px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    width: 100%;
    min-height: 280px;
    order: 2;
    margin-top: 10px;
  }
`;

const QRImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 15px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 12px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    padding: 10px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    
    /* Desktop and landscape */
    @media (min-width: 769px) {
      max-height: 400px;
      object-fit: contain;
    }
    
    /* Mobile landscape */
    @media (max-width: 768px) and (orientation: landscape) {
      max-height: 300px;
      object-fit: contain;
    }
    
    /* Mobile portrait - Make it much larger! */
    @media (max-width: 768px) and (orientation: portrait) {
      max-height: 300px;
      min-height: 250px;
      width: 100%;
      object-fit: contain;
      border-radius: 20px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    }
    
    /* Small mobile portrait */
    @media (max-width: 600px) and (orientation: portrait) {
      max-height: 280px;
      min-height: 220px;
      width: 100%;
      object-fit: contain;
      border-radius: 18px;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.18);
    }
    
    /* Very small mobile portrait */
    @media (max-width: 480px) and (orientation: portrait) {
      max-height: 250px;
      min-height: 200px;
      width: 100%;
      object-fit: contain;
      border-radius: 16px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
    }
    
    /* Height-based portrait adjustments */
    @media (max-height: 600px) and (orientation: portrait) {
      max-height: 280px;
      min-height: 230px;
      width: 100%;
      object-fit: contain;
    }
    
    @media (max-height: 500px) and (orientation: portrait) {
      max-height: 240px;
      min-height: 200px;
      width: 100%;
      object-fit: contain;
    }
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const Footer = styled.footer`
  background: #ffffff;
  border-top: 2px solid #e5e7eb;
  padding: 20px 40px;
  flex-shrink: 0;
  text-align: center;
  font-size: 14px;
  color: #666;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #10b981;
  font-weight: 500;
`;

export default function DynamicQRPage() {
  const [invoiceId, setInvoiceId] = useState('');
  const [amount, setAmount] = useState('2,950');
  
  return (
    <Container>
      <ScrollableContent>        
        <DeviceAwareContainer>
          <LeftColumn>
            <Header>
              <h1>Create Dynamic QR</h1>
              <p>Generate real-time payment QR codes for your customers</p>
            </Header>
            <DeviceAwareCard>
              <Section>
                <SectionTitle>TRANSACTION AMOUNT</SectionTitle>
                <AmountDisplay>
                  <IndianRupee size={32} /> {amount}
                </AmountDisplay>
                <InvoiceInfo>Invoice: {invoiceId || 'INV-2024-001'}</InvoiceInfo>
              </Section>

              <Section>
                <InputLabel>INVOICE ID / REFERENCE</InputLabel>
                <DeviceAwareInput 
                  type="text"
                  value={invoiceId}
                  onChange={(e) => setInvoiceId(e.target.value)}
                  placeholder="INV-2024-001"
                />
              </Section>

              <Section>
                <SectionTitle>PAYMENT METHOD</SectionTitle>
                <PaymentMethodSelector>
                  <PaymentOption className="active">
                    <IndianRupee size={16} />
                    <span>UPI</span>
                  </PaymentOption>
                  <PaymentOption>
                    <CreditCard size={16} />
                    <span>Card</span>
                  </PaymentOption>
                </PaymentMethodSelector>
              </Section>

              <Section>
                <ButtonGroup>
                  <DeviceAwareButton>
                    Generate QR & Sync Device <Zap size={18} />
                  </DeviceAwareButton>
                  {/*<SecondaryButton>
                    Sync Device <ArrowRightCircle size={18} />
                  </SecondaryButton>*/}
                </ButtonGroup>
              </Section>

              <Section>
                <StatusCard>
                  <StatusDot />
                  DEVICE MC-9028 IS ONLINE AND READY
                </StatusCard>
              </Section>
            </DeviceAwareCard>
          </LeftColumn>
          
          {/* Right Column - QR Image */}
          <RightColumn>
            <QRImageContainer>
              <img 
                src="/QR-Generator.png" 
                alt="QR Code Generator" 
                style={{
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  borderRadius: '12px',
                  objectFit: 'contain'
                }}
              />
            </QRImageContainer>
          </RightColumn>
      </DeviceAwareContainer>
      </ScrollableContent>

      <Footer>
        <FooterContent>
          <span>2024 TattvamPay SYSTEMS.</span>
          <StatusIndicator>
            <StatusDot /> System Online • Real-time Sync
          </StatusIndicator>
        </FooterContent>
      </Footer>
    </Container>
  );
};