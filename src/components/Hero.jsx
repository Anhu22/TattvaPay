import React from "react";
import styled from "styled-components";
import { QrCode } from "lucide-react";

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Left = styled.div`
  flex: 1;
  max-width: 550px;

  h1 {
    font-size: 56px;
    margin-bottom: 24px;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    color: black;
    margin-bottom: 8px;
    font-style: italic;
    font-size: 16px;
    line-height: 1.6;
  }

  h5 {
    color: gray;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #ff7a00;
  color: white;
  padding: 14px 28px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #e66a00;
  }
`;

const SecondaryButton = styled.button`
  background: #f0f0f0;
  color: #333;
  padding: 14px 28px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
  }
`;

const UPIButton = styled.button`
  background: rgba(236, 223, 201, 0.55);
  color: rgba(233, 163, 32, 0.92);
  padding: 8px 15px;
  margin-top: 8px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 12px;
  transition: background 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgba(236, 223, 201, 0.8);
  }
`;

// Madhu Creations Card Styled Components
const Card = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  text-align: center;
  flex: 1;
  max-width: 360px;
  font-family: 'Inter', -apple-system, sans-serif;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Brand = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.01em;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    width: 20px;
    height: 2px;
    background-color: #666;
    border-radius: 1px;
    transition: background-color 0.2s;
  }

  &:hover span {
    background-color: #ff7a00;
  }
`;

const AmountSection = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const AmountLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Amount = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;

  span {
    font-size: 24px;
    font-weight: 500;
    color: #666;
    margin-right: 4px;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 32px 0;
`;

const TimerBlock = styled.div`
  text-align: center;
`;

const TimerValue = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 4px;
`;

const TimerLabel = styled.div`
  font-size: 12px;
  color: #999;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Divider = styled.div`
  font-size: 36px;
  font-weight: 300;
  color: #ccc;
  line-height: 1;
`;

const QRBox = styled.div`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  
  svg {
    width: 150px;
    height: 180px;
    color: #1a1a1a;
  }
`;

const QRImage = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 4px solid black;
  transform: rotate(2deg);
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
  margin-top: 8px;
`;

const PoweredBy = styled.div`
  font-size: 11px;
  color: #999;
  margin-bottom: 4px;
  letter-spacing: 0.3px;
`;

const CompanyName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  letter-spacing: -0.01em;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Left>
        <h1>Accept UPI Payments Instantly.</h1>

        <p>
          Bring the warmth of authentic transactions to your shop. A real device for real people, designed to bridge the gap between digital payments and personal connection.
        </p>

        <ButtonGroup>
          <PrimaryButton>Buy Device</PrimaryButton>
          <SecondaryButton>Request Demo</SecondaryButton>
        </ButtonGroup>
        
        <p>Used by 5,000+ local business</p>
        <h5>Supports all major UPI payment apps</h5>
        
        <ButtonGroup>
          <UPIButton>PhonePe</UPIButton>
          <UPIButton>Google Pay</UPIButton>
          <UPIButton>Paytm</UPIButton>
          <UPIButton>Amazon Pay</UPIButton>
        </ButtonGroup>
      </Left>

      <Card>
        <QRBox>
          <QRImage src="/Home-QR.png" alt="QR Code" />
        </QRBox>
      </Card>
    </HeroSection>
  );
};

export default Hero;