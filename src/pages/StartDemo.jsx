import React from "react";
import styled from "styled-components";
import { ArrowRight, CheckCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <Container>
      
      <HeroSection>
        <LeftSection>
          <Tag>PERSONALIZED EXPERIENCE</Tag>

          <Heading>
            See TATTVAMPAY <br />
            CREATIONS <span>in</span> <br />
            <Highlight>Action</Highlight>
          </Heading>

          <Description>
            Schedule a personalized walkthrough of our smart QR device and
            merchant dashboard. Discover how we can transform your checkout
            experience.
          </Description>

          <FeatureList>
            <Feature>
              <CheckCircle size={18} />
              <div>
                <strong>Live device sync demo</strong>
                <p>See real-time payment confirmation and device alerts.</p>
              </div>
            </Feature>

            <Feature>
              <CheckCircle size={18} />
              <div>
                <strong>Dashboard walkthrough</strong>
                <p>Explore transaction insights and settlements UI.</p>
              </div>
            </Feature>

            <Feature>
              <CheckCircle size={18} />
              <div>
                <strong>Custom pricing consultation</strong>
                <p>Get tailored rates based on your business volume.</p>
              </div>
            </Feature>
          </FeatureList>
        </LeftSection>

        <RightSection>
          <FormCard>
            <CardTitle>Request a Demo</CardTitle>
            <CardSub>
              Fill out the details below and we’ll be in touch.
            </CardSub>

            <InputRow>
              <Input placeholder="Full Name" />
              <Input placeholder="Business Name" />
            </InputRow>

            <Input placeholder="Phone Number" />

            <Select>
              <option>Select category</option>
              <option>Retail</option>
              <option>Restaurant</option>
              <option>Services</option>
            </Select>

            <Button>
              Schedule My Demo <ArrowRight size={16} />
            </Button>

            <Disclaimer>
              By clicking, you agree to our Terms and Privacy Policy.
            </Disclaimer>
          </FormCard>
        </RightSection>
      </HeroSection>

      <Footer>
        <span>Powered by Tattvasphere</span>
        <span>© 2024 TattvamPay</span>

        <FooterLinks>
          <a href="#">Support</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </FooterLinks>
      </Footer>
    </Container>
  );
};

export default LandingPage;

/* ---------------- STYLES ---------------- */

const Container = styled.div`
  min-height: 100vh;
  background: #f7f7f7;
  padding: 40px 80px;
  font-family: Inter, sans-serif;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-weight: 700;
  font-size: 22px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 16px;
  }
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  gap: 80px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const Tag = styled.span`
  background: #ffe9d6;
  color: #ff7a00;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
`;

const Heading = styled.h1`
  font-size: 56px;
  margin: 20px 0;
  line-height: 1.2;

  span {
    color: #ff7a00;
  }
`;

const Highlight = styled.span`
  color: #ff7a00;
`;

const Description = styled.p`
  color: #666;
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Feature = styled.div`
  display: flex;
  gap: 12px;

  svg {
    color: #ff7a00;
    margin-top: 3px;
  }

  div {
    flex: 1;
  }

  strong {
    font-size: 16px;
    display: block;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }
`;

const RightSection = styled.div`
  width: 380px;
`;

const FormCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
`;

const CardTitle = styled.h3`
  margin-bottom: 6px;
  font-size: 20px;
  font-weight: 700;
`;

const CardSub = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  margin-bottom: 18px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: #ff7a00;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #e66c00;
  }
`;

const Disclaimer = styled.p`
  font-size: 13px;
  color: #999;
  text-align: center;
  margin-top: 10px;
  line-height: 1.4;
`;

const Footer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #888;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #888;
    text-decoration: none;
    font-size: 14px;
  }
`;