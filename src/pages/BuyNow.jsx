import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 48px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Header = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    
    span {
      color: #ff7a00;
    }
  }
`;

const EditIndicator = styled.span`
  background: #f0f0f0;
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Section = styled.div`
  margin-bottom: 32px;
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #666;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
`;

const ContactItem = styled.div`
  p {
    color: #888;
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: #ff7a00;
  }
  
  &::placeholder {
    color: #ccc;
    font-weight: 400;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #f0f0f0;
  margin: 24px 0;
`;

const ShippingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  margin-bottom: 16px;
`;

const ShippingItem = styled.div`
  p {
    color: #888;
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #f0f0f0;
  padding-top: 12px;
  margin-top: 16px;
`;

const TableHeader = styled.div`
  font-weight: 600;
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

const TableRow = styled.div`
  display: contents;
  
  input {
    width: 90%;
    padding: 8px 0;
    border: none;
    border-bottom: 2px solid #f0f0f0;
    font-size: 15px;
    color: #1a1a1a;
    
    &:focus {
      outline: none;
      border-bottom-color: #ff7a00;
    }
  }
`;

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 16px;
`;

const PaymentCard = styled.div`
  padding: 16px;
  border: 2px solid ${props => props.$selected ? '#ff7a00' : '#f0f0f0'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ff7a00;
  }
  
  h4 {
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    font-size: 16px;
  }
  
  p {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
`;

const RadioInput = styled.input`
  margin-right: 8px;
  accent-color: #ff7a00;
`;

const ProductCard = styled.div`
  background: #f8f9fa;
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
`;

const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const ProductSubtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eaeaea;
  
  &:last-of-type {
    border-bottom: none;
  }
  
  span {
    color: #4a4a4a;
    font-size: 15px;
    
    &:last-child {
      font-weight: 600;
      color: #1a1a1a;
    }
  }
`;

const PlanBadge = styled.div`
  background: #e6f7e6;
  color: #00a86b;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;
  margin-left: 8px;
`;

const TotalSection = styled.div`
  text-align: right;
  margin: 24px 0;
  
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
    
    span {
      font-size: 14px;
      font-weight: 400;
      color: #666;
      margin-right: 8px;
    }
  }
`;

const Button = styled.button`
  background: #ff7a00;
  color: white;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin: 24px 0 16px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #e66a00;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Terms = styled.p`
  text-align: center;
  color: #888;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const Footer = styled.div`
  text-align: center;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  padding-top: 24px;
  border-top: 2px solid #f0f0f0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SuccessMessage = styled.div`
  background: #e6f7e6;
  color: #00a86b;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  margin-top: 16px;
  font-weight: 500;
`;

const Invoice = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: 'alex@example.com',
    mobile: '+91 98765 43210',
    fullName: 'Alex Johnson',
    streetAddress: 'Flat, House no., Building, Company, Apartment',
    city: 'Mumbai',
    pincode: '400001',
    paymentMethod: 'upi'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    if (formData.email && formData.mobile && formData.fullName && formData.streetAddress && formData.city && formData.pincode) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Navigate to order success page after a short delay
      setTimeout(() => {
        navigate('/order-success');
      }, 1500);
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <Container>
      <Header>
        <h1>TATTVAM<span>PAY</span></h1>
        <EditIndicator>✎ Edit Mode</EditIndicator>
      </Header>
      
      <Divider />

      <form onSubmit={handleSubmit}>
        <Section>
          <h2>1. Contact Details</h2>
          <ContactGrid>
            <ContactItem>
              <p>Email Address</p>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </ContactItem>
            <ContactItem>
              <p>Mobile Number</p>
              <Input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
                required
              />
            </ContactItem>
          </ContactGrid>
        </Section>

        <Divider />

        <Section>
          <h2>2. Shipping Information</h2>
          <ShippingGrid>
            <ShippingItem>
              <p>Full Name</p>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter full name"
                required
              />
            </ShippingItem>
            <ShippingItem>
              <p>Street Address</p>
              <Input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Enter street address"
                required
              />
            </ShippingItem>
          </ShippingGrid>
          
          <Table>
            <TableHeader>City</TableHeader>
            <TableHeader>Pincode</TableHeader>
            <TableRow>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                required
              />
              <Input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Pincode"
                required
                pattern="[0-9]{6}"
                title="Please enter a valid 6-digit pincode"
              />
            </TableRow>
          </Table>
        </Section>

        <Divider />

        <Section>
          <h2>3. Payment Method</h2>
          <PaymentMethods>
            <PaymentCard 
              $selected={formData.paymentMethod === 'upi'}
              onClick={() => handlePaymentMethodChange('upi')}
            >
              <RadioInput
                type="radio"
                name="paymentMethod"
                value="upi"
                checked={formData.paymentMethod === 'upi'}
                onChange={() => handlePaymentMethodChange('upi')}
              />
              <h4>UPI</h4>
              <p>Google Pay, PhonePe, Paytm</p>
            </PaymentCard>
            
            <PaymentCard 
              $selected={formData.paymentMethod === 'card'}
              onClick={() => handlePaymentMethodChange('card')}
            >
              <RadioInput
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === 'card'}
                onChange={() => handlePaymentMethodChange('card')}
              />
              <h4>Credit / Debit Card</h4>
              <p>Visa, Mastercard, RuPay</p>
            </PaymentCard>
            
            <PaymentCard 
              $selected={formData.paymentMethod === 'netbanking'}
              onClick={() => handlePaymentMethodChange('netbanking')}
            >
              <RadioInput
                type="radio"
                name="paymentMethod"
                value="netbanking"
                checked={formData.paymentMethod === 'netbanking'}
                onChange={() => handlePaymentMethodChange('netbanking')}
              />
              <h4>Net Banking</h4>
              <p>All major Indian banks supported</p>
            </PaymentCard>
          </PaymentMethods>
        </Section>

        <Divider />

        <ProductCard>
          <ProductTitle>Smart QR Device (Gen 1)</ProductTitle>
          <ProductSubtitle>Premium Fintech Hardware</ProductSubtitle>
          
          <PriceRow>
            <span>Device Price</span>
            <span>₹2,950.00</span>
          </PriceRow>
          
          <PriceRow>
            <span>GST (18%)</span>
            <span>₹531.00</span>
          </PriceRow>
          
          <PriceRow>
            <span>Subscription Plan</span>
            <span>₹2,999.00 <PlanBadge>YEARLY PLAN (ACTIVE)</PlanBadge></span>
          </PriceRow>
          
          <PriceRow>
            <span>Shipping</span>
            <span>FREE</span>
          </PriceRow>
        </ProductCard>

        <TotalSection>
          <h3>
            <span>Total Payable</span>
            ₹6,480.00
          </h3>
        </TotalSection>

        <Button type="submit" disabled={isSubmitted}>
          {isSubmitted ? 'Purchase Complete ✓' : 'Complete Purchase →'}
        </Button>
      </form>
      
      {isSubmitted && (
        <SuccessMessage>
          Thank you! Your order has been placed successfully. A confirmation has been sent to {formData.email}
        </SuccessMessage>
      )}
      
      <Terms>
        By clicking complete purchase, you agree to the Terms & Conditions and Privacy Policy.
      </Terms>

      <Footer>
        A PRODUCT OF TATTVASPHERE
      </Footer>
    </Container>
  );
};

export default Invoice;