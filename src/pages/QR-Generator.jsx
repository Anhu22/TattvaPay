import React, { useState } from 'react';
import styled from 'styled-components';
import { QrCode, Smartphone, Wifi, Zap, IndianRupee, Hash, ArrowRightCircle, Copy, CheckCircle, TrendingUp, Circle } from 'lucide-react';

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
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 20px;
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
  box-shadow: 0 8px 24px rgba(0,0,0,0.05);
  border: 1px solid #e5e7eb;
  height: fit-content;
  width: 480px;
  flex-shrink: 0;
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
  
  svg {
    width: 32px;
    height: 32px;
    color: #1a1a1a;
  }
`;

const InvoiceInfo = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 24px;
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
  
  &::placeholder {
    color: #9ca3af;
    font-size: 16px;
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
`;

const QRImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <MainContainer>
          <div>
            <Header>
              <h1>Create Dynamic QR</h1>
              <p>Generate real-time payment QR codes for your customers</p>
            </Header>
            <LeftColumn>
              <Section>
                <SectionTitle>TRANSACTION AMOUNT</SectionTitle>
                <AmountDisplay>
                  <IndianRupee size={32} /> {amount}
                </AmountDisplay>
                <InvoiceInfo>Invoice: {invoiceId || 'INV-2024-001'}</InvoiceInfo>
              </Section>

              <Section>
                <InputLabel>INVOICE ID / REFERENCE</InputLabel>
                <StyledInput 
                  type="text"
                  placeholder="e.g. INV-2024-001"
                  value={invoiceId}
                  onChange={(e) => setInvoiceId(e.target.value)}
                />
              </Section>

              <Section>
                <ButtonGroup>
                  <PrimaryButton>
                    Generate QR & Sync Device <Zap size={18} />
                  </PrimaryButton>
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
            </LeftColumn>
          </div>
          
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
        </MainContainer>
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
}