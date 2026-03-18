import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  TrendingUp, 
  TrendingDown, 
  CreditCard, 
  Clock, 
  RefreshCw, 
  AlertCircle,
  QrCode,
  Plus,
  Download,
  HelpCircle,
  ChevronUp,
  ChevronDown,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
  Users,
  Wallet,
  DollarSign,
  CheckCircle,
  XCircle,
  Smartphone,
  Battery,
  IndianRupee
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  DeviceAwareGrid, 
  DeviceAwareCard, 
  DeviceAwareButton,
  DeviceAwareContainer 
} from '../components/DeviceAwareComponents.jsx';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 30px 40px;
  
  /* Tablet and smaller */
  @media (max-width: 1200px) {
    padding: 25px 30px;
  }
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    padding: 20px 25px;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    padding: 20px 20px;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    padding: 15px 15px;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    padding: 12px 12px;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    padding: 20px 20px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    padding: 15px 15px;
  }
`;

const DashboardTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

// Use device-aware grid instead of styled grid
// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
//   margin-bottom: 30px;
//   
//   /* Tablet and smaller */
//   @media (max-width: 1200px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   
//   /* Mobile landscape */
//   @media (max-width: 768px) and (orientation: landscape) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 15px;
//     margin-bottom: 20px;
//   }
//   
//   /* Mobile portrait */
//   @media (max-width: 768px) and (orientation: portrait) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 12px;
//     margin-bottom: 20px;
//   }
//   
//   /* Small mobile portrait */
//   @media (max-width: 600px) and (orientation: portrait) {
//     grid-template-columns: 1fr;
//     gap: 12px;
//     margin-bottom: 15px;
//   }
//   
//   /* Very small mobile portrait */
//   @media (max-width: 480px) and (orientation: portrait) {
//     grid-template-columns: 1fr;
//     gap: 10px;
//     margin-bottom: 15px;
//   }
//   
//   /* Height-based portrait adjustments */
//   @media (max-height: 600px) and (orientation: portrait) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 12px;
//     margin-bottom: 15px;
//   }
//   
//   @media (max-height: 500px) and (orientation: portrait) {
//     grid-template-columns: 1fr;
//     gap: 10px;
//     margin-bottom: 10px;
//   }
// `;

// Use device-aware card instead of styled card
// const StatCard = styled.div`
//   background: #ffffff;
//   border-radius:16px;
//   padding: 20px;
//   position: relative;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//   transition: transform 0.2s, box-shadow 0.2s;
//   
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 16px rgba(0,0,0,0.1);
//   }
//   
//   @media (max-width: 768px) {
//     padding: 16px;
//   }
//   
//   @media (max-width: 480px) {
//     padding: 12px;
//     border-radius: 12px;
//   }
//   
//   @media (max-height: 600px) and (orientation: portrait) {
//     padding: 14px;
//   }
//   
//   @media (max-height: 500px) and (orientation: portrait) {
//     padding: 10px;
//     border-radius: 10px;
//   }
// `;

const StatLabel = styled.div`
  color: #666;
  font-size: 16px;
  margin-bottom: 8px;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const StatBadge = styled.span`
  background: ${props => props.$positive ? '#e6f7e6' : '#ffe6e6'};
  color: ${props => props.$positive ? '#00a86b' : '#ff4444'};
  font-size: 14px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const StatSubtext = styled.div`
  color: #999;
  font-size: 14px;
  margin-top: 8px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e5e7eb;
  margin: 30px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
`;

const Subtext = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 12px;
`;

const Tabs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

const Tab = styled.span`
  font-size: 18px;
  color: ${props => props.$active ? '#ff7a00' : '#666'};
  font-weight: ${props => props.$active ? '600' : '400'};
  cursor: pointer;
  border-bottom: ${props => props.$active ? '2px solid #ff7a00' : 'none'};
  padding-bottom: 4px;
  transition: all 0.2s;
  
  &:hover {
    color: #ff7a00;
  }
`;

const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 24px 0;
  
  /* Tablet and smaller */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Mobile landscape */
  @media (max-width: 768px) and (orientation: landscape) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin: 20px 0;
  }
  
  /* Mobile portrait */
  @media (max-width: 768px) and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 20px 0;
  }
  
  /* Small mobile portrait */
  @media (max-width: 600px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 15px 0;
  }
  
  /* Very small mobile portrait */
  @media (max-width: 480px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 15px 0;
  }
  
  /* Height-based portrait adjustments */
  @media (max-height: 600px) and (orientation: portrait) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin: 15px 0;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    gap: 10px;
    margin: 12px 0;
  }
`;

const QuickActionCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  &:hover {
    background: #fff5eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }
  
  &:active {
    transform: translateY(0px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  
  @media (max-width: 768px) {
    padding: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 12px;
  }
  
  @media (max-height: 600px) and (orientation: portrait) {
    padding: 14px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    padding: 10px;
    border-radius: 10px;
  }
  
  svg {
    width: 28px;
    height: 28px;
    color: #ff7a00;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
      width: 24px;
      height: 24px;
      margin-bottom: 8px;
    }
    
    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
      margin-bottom: 6px;
    }
    
    @media (max-height: 600px) and (orientation: portrait) {
      width: 22px;
      height: 22px;
      margin-bottom: 8px;
    }
  }
  
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 6px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    @media (max-height: 600px) and (orientation: portrait) {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  
  p {
    color: #666;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
    
    @media (max-height: 600px) and (orientation: portrait) {
      font-size: 13px;
    }
  }
`;

const HelpCard = styled.div`
  background: #fff5eb;
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(255, 122, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

const HelpContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  
  svg {
    width: 32px;
    height: 32px;
    color: #ff7a00;
  }
  
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  
  p {
    color: #666;
    font-size: 15px;
    margin: 0;
  }
`;

const HelpButton = styled.button`
  background: #ff7a00;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #e66a00;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 122, 0, 0.3);
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 30px 0;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  
  @media (max-width: 768px) {
    min-width: 600px;
    font-size: 14px;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 16px 20px;
  color: #666;
  font-weight: 600;
  font-size: 15px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;
  }
  
  border-bottom: 2px solid #f0f0f0;
  background: #f9fafb;
`;

const Td = styled.td`
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
  color: #1a1a1a;
  font-size: 15px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;
  }
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  background: ${props => {
    switch(props.$status) {
      case 'Success': return '#e6f7e6';
      case 'Pending': return '#fff5e6';
      case 'Failed': return '#ffe6e6';
      default: return '#f0f0f0';
    }
  }};
  
  color: ${props => {
    switch(props.$status) {
      case 'Success': return '#00a86b';
      case 'Pending': return '#ff7a00';
      case 'Failed': return '#ff4444';
      default: return '#666';
    }
  }};
`;

const Footer = styled.footer`
  margin-top: 40px;
  padding: 30px 40px 20px;
  border-top: 2px solid #e5e7eb;
  background: #ffffff;
  
  @media (max-width: 768px) {
    padding: 30px 20px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s;
    
    &:hover {
      color: #ff7a00;
    }
  }
`;

const Copyright = styled.div`
  color: #999;
  font-size: 14px;
`;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const navigate = useNavigate();
  
  const transactions = [
    { id: '#MC-TXN-98421', amount: '₹1,250.00', method: 'PhonePe UPI', datetime: 'Oct 24, 2023 - 10:40 AM', status: 'Success' },
    { id: '#MC-TXN-98420', amount: '₹450.00', method: 'Google Pay', datetime: 'Oct 24, 2023 - 10:32 AM', status: 'Pending' },
    { id: '#MC-TXN-98419', amount: '₹2,100.00', method: 'Paytm UPI', datetime: 'Oct 24, 2023 - 09:15 AM', status: 'Success' },
    { id: '#MC-TXN-98418', amount: '₹85.00', method: 'Amazon Pay', datetime: 'Oct 24, 2023 - 08:50 AM', status: 'Failed' }
  ];

  return (
    <Container>
      <ContentWrapper>
        <DashboardTitle>Dashboard</DashboardTitle>
        
        <DeviceAwareGrid style={{ marginBottom: '30px' }}>
          <DeviceAwareCard>
            <StatLabel>TODAY'S SALES</StatLabel>
            <StatValue>
              ₹12,450
              <StatBadge $positive>
                <TrendingUp size={14} /> +12%
              </StatBadge>
            </StatValue>
            <StatSubtext>vs yesterday</StatSubtext>
          </DeviceAwareCard>

          <DeviceAwareCard>
            <StatLabel>TOTAL TRANSACTIONS</StatLabel>
            <StatValue>48</StatValue>
            <StatSubtext>Last 24 hours</StatSubtext>
          </DeviceAwareCard>

          <DeviceAwareCard>
            <StatLabel>PENDING SETTLEMENTS</StatLabel>
            <StatValue>₹8,200</StatValue>
            <StatSubtext>Expected by tomorrow</StatSubtext>
          </DeviceAwareCard>

          <DeviceAwareCard>
            <StatLabel>REFUND REQUESTS</StatLabel>
            <StatValue>2</StatValue>
            <StatSubtext>Requires attention</StatSubtext>
          </DeviceAwareCard>
        </DeviceAwareGrid>

        {/*<Tabs>
          <Tab $active={activeTab === 'daily'} onClick={() => setActiveTab('daily')}>Daily</Tab>
          <Tab $active={activeTab === 'weekly'} onClick={() => setActiveTab('weekly')}>Weekly</Tab>
          <Tab $active={activeTab === 'monthly'} onClick={() => setActiveTab('monthly')}>Monthly</Tab>
        </Tabs>*/}

        <SectionHeader>
          <h3>Quick Actions</h3>
        </SectionHeader>

        <QuickActionsGrid>
          <QuickActionCard onClick={() => navigate('/qr-generator')}>
            <QrCode />
            <h4>Generate Dynamic QR Code</h4>
            <p>Create a one-time payment code for customers</p>
          </QuickActionCard>

          <QuickActionCard onClick={() => navigate('/devices')}>
            <Plus />
            <h4>Add New Device</h4>
            <p>Register new QR hardware to your account</p>
          </QuickActionCard>

          <QuickActionCard onClick={() => navigate('/settlements')}>
            <Download />
            <h4>Download Report</h4>
            <p>Export settlement history as PDF or CSV</p>
          </QuickActionCard>
        </QuickActionsGrid>

        <HelpCard>
          <HelpContent>
            <HelpCircle />
            <div>
              <h4>Need help with a transaction?</h4>
              <p>Our dedicated support team is available 24/7 for any payment issues.</p>
            </div>
          </HelpContent>
          <HelpButton>Contact Us</HelpButton>
        </HelpCard>

        <SectionHeader>
          <h3>Recent Transactions</h3>
        </SectionHeader>

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Transaction ID</Th>
                <Th>Amount</Th>
                <Th>Payment Method</Th>
                <Th>Date & Time</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index}>
                  <Td>{txn.id}</Td>
                  <Td>{txn.amount}</Td>
                  <Td>{txn.method}</Td>
                  <Td>{txn.datetime}</Td>
                  <Td>
                    <StatusBadge $status={txn.status}>
                      {txn.status === 'Success' && <CheckCircle size={12} />}
                      {txn.status === 'Pending' && <Clock size={12} />}
                      {txn.status === 'Failed' && <XCircle size={12} />}
                      {txn.status}
                    </StatusBadge>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </ContentWrapper>

      <Footer>
        <FooterContent>
          <CompanyName>MADHU CREATIONS</CompanyName>
          <FooterLinks>
            <a href="#">Documentation</a>
            <a href="#">API References</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </FooterLinks>
          <Copyright>© 2024 TattvamPay HARDWARE SYSTEMS. All rights reserved.</Copyright>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default Dashboard;