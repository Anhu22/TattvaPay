import styled from "styled-components";
import { Zap, ShieldCheck, Mic } from "lucide-react";

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255,122,0,0.03) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  max-width: 700px;
  margin-bottom: 60px;
  
  h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 20px;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  
  .highlight {
    color: #ff7a00;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(255,122,0,0.2);
      z-index: -1;
    }
  }
  
  p {
    font-size: 22px;
    color: #7b7b7b;
    line-height: 1.6;
    max-width: 580px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &.instant-settlement {
    border: 2px solid #ff7a00;
  }
  
  &.battery-card {
    background: #1a1a1a;
    color: white;
    border: 1px solid #1a1a1a;
  }
  
  &.voice-card {
    background: #ff7a00;
    color: white;
    border: 1px solid #ff7a00;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff7a00, #ffb347);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(255, 122, 0, 0.12);
    border-color: rgba(255, 122, 0, 0.2);
    
    &::before {
      transform: scaleX(1);
    }
    
    .icon-wrapper {
      background: #ff7a00;
      color: white;
      transform: scale(1.1);
    }
    
    .learn-more {
      color: #ff7a00;
      gap: 12px;
    }
  }
`;


const CardContent = styled.div`
  h3 {
    font-size: 26px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  
  p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  .battery-card & {
    h3, p {
      color: white;
    }
  }
  
  .voice-card & {
    h3, p {
      color: white;
    }
  }
`;

const StatsBadge = styled.div`
  display: inline-block;
  padding: 6px 12px;
  background: rgba(255, 122, 0, 0.08);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: #ff7a00;
  margin-top: 8px;
  margin-left: 5px;
    
  .voice-card & {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;


const BusinessSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "No more waiting for tomorrow. Money hits your bank account the moment the transaction is verified. Liquid cash for your liquid business.",
      gradient: "linear-gradient(135deg, #FFF3E8, #FFE4D6)",
      highlight: "Real-time processing"
    },
    {
      icon: ShieldCheck,
      title: "14-Day Battery",
      description: "Efficient power management for shops without constant charging access.",
      gradient: "linear-gradient(135deg, #E8F0FE, #D9E9FF)",
      highlight: "Bank-grade security"
    },
    {
      icon: Mic,
      title: "Voice Confirmation",
      description: "Loud and clear audio alerts in 12 Indian languages.",
      gradient: "linear-gradient(135deg, #F3E8FF, #EBD9FF)",
      stats1: "Hindi",
      stats2: "English",
      stats3: "Marathi",
      highlight: "Hands-free approval"
    }
  ];

  return (
    <Section id="features">
      <Container>
        <Header>
          <h2>
            Built for the rhythms of <span className="highlight">real business.</span>
          </h2>
          <p>
            We focus on the small details that make a big difference in your daily operations -from battery life that lasts weeks to voice alerts you can actually hear.
          </p>
        </Header>

        <Grid>
          {/* Instant Settlement card on the left */}
          <FeatureCard className="instant-settlement">
            <CardContent>
              <h3>{features[0].title}</h3>
              <p>{features[0].description}</p>
            </CardContent>
            
            <img 
              src="/Home-build.png" 
              alt="Instant Settlement" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginTop: '20px'
              }}
            />
          </FeatureCard>

          {/* Other two cards on the right */}
          <RightColumn>
            {/* 14-Day Forgery Protection card */}
            <FeatureCard className="battery-card">
              <CardContent>
                <h3>{features[1].title}</h3>
                <p>{features[1].description}</p>
              </CardContent>
              
            </FeatureCard>
            
            {/* Voice Confirmation card */}
            <FeatureCard className="voice-card">
              <CardContent>
                <h3>{features[2].title}</h3>
                <p>{features[2].description}</p>
              </CardContent>
              
              <StatsBadge>{features[2].stats1}</StatsBadge>
              <StatsBadge>{features[2].stats2}</StatsBadge>
              <StatsBadge>{features[2].stats3}</StatsBadge>
            </FeatureCard>
          </RightColumn>
        </Grid>

        {/*<FeatureHighlight>
          <HighlightItem>
            <span className="dot" />
            <span>PCI compliant</span>
          </HighlightItem>
          <HighlightItem>
            <span className="dot" />
            <span>24/7 monitoring</span>
          </HighlightItem>
          <HighlightItem>
            <span className="dot" />
            <span>Global coverage</span>
          </HighlightItem>
          <HighlightItem>
            <span className="dot" />
            <span>API first</span>
          </HighlightItem>
          <HighlightItem>
            <span className="dot" />
            <span>ISO 27001 certified</span>
          </HighlightItem>
        </FeatureHighlight>*/}
      </Container>
    </Section>
  );
};

export default BusinessSection;