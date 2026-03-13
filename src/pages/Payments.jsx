import React from 'react';
import styled from 'styled-components';
import { 
  IndianRupee, CreditCard, Smartphone, Calendar, Filter, 
  ChevronDown, Download, Search, ArrowUpRight, ArrowDownRight,
  Clock, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight,
  Phone, User, MoreHorizontal, Eye, TrendingUp, TrendingDown, Hash
} from 'lucide-react';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 32px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f8fafd;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const HeaderLeft = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #0a1a2f;
    margin: 0 0 4px 0;
    letter-spacing: -0.5px;
  }
  p {
    color: #546e8a;
    font-size: 16px;
    margin: 0;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 12px;
`;

const IconButton = styled.button`
  background: white;
  border: 1px solid #dde3eb;
  border-radius: 40px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  
  &:hover {
    background: #f5f9ff;
    border-color: #9fb8db;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }
`;

const ExportButton = styled.button`
  background: #f5720e;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
  
  &:hover {
    background: #f87e21;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 40px;
  padding: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.02);
`;

const FilterItem = styled.button`
  background: ${props => props.active ? '#0b1b32' : 'transparent'};
  color: ${props => props.active ? 'white' : '#3e5775'};
  border: none;
  padding: 10px 20px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.15s;
  
  &:hover {
    background: ${props => props.active ? '#0b1b32' : '#f0f5fc'};
  }
`;

const DateRangePicker = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 40px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #1f3a5f;
  cursor: pointer;
  transition: 0.15s;
  
  &:hover {
    background: #f5f9ff;
    border-color: #9fb8db;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 8px 20px -12px rgba(0,20,40,0.15);
  border: 1px solid #eef3f8;
  transition: transform 0.15s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px -12px rgba(0,20,40,0.2);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StatTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #6f8aa8;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background: ${props => props.color || '#e8f0fe'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color ? 'white' : '#0b5a9e'};
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #0a1a2f;
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

const StatChange = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.positive ? '#22a65e' : '#dc3b4b'};
  background: ${props => props.positive ? '#e3f5e9' : '#ffe5e7'};
  padding: 4px 10px;
  border-radius: 30px;
  width: fit-content;
`;

const TableContainer = styled.div`
  background: white;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 12px 30px -16px rgba(0,20,40,0.15);
  border: 1px solid #eef3f8;
  margin-bottom: 24px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const TableTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0b1b32;
`;

const TableActions = styled.div`
  display: flex;
  gap: 12px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px 12px;
  font-size: 13px;
  font-weight: 600;
  color: #5e7b9c;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #eef3f8;
`;

const Td = styled.td`
  padding: 18px 12px;
  font-size: 14px;
  color: #1f3a5f;
  border-bottom: 1px solid #eef3f8;
`;

const TransactionId = styled.span`
  font-weight: 600;
  color: #0b5a9e;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CustomerName = styled.div`
  font-weight: 500;
  color: #0a1a2f;
`;

const CustomerPhone = styled.div`
  font-size: 12px;
  color: #6f8aa8;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f0f6ff;
  padding: 6px 12px;
  border-radius: 30px;
  width: fit-content;
  font-size: 13px;
  font-weight: 500;
  color: #1f3a5f;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  width: fit-content;
  
  ${props => {
    switch(props.status.toLowerCase()) {
      case 'success':
        return `
          background: #e3f5e9;
          color: #1f7b4a;
        `;
      case 'failed':
        return `
          background: #ffe5e7;
          color: #c73a48;
        `;
      case 'pending':
        return `
          background: #fff4e0;
          color: #b45f1a;
        `;
      default:
        return `
          background: #f0f2f5;
          color: #5f6c80;
        `;
    }
  }}
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: #5e7b9c;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

const PageButton = styled.button`
  background: ${props => props.active ? '#0b1b32' : 'white'};
  color: ${props => props.active ? 'white' : '#1f3a5f'};
  border: 1px solid ${props => props.active ? '#0b1b32' : '#dde3eb'};
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  transition: 0.15s;
  
  &:hover {
    background: ${props => props.active ? '#0b1b32' : '#f5f9ff'};
    border-color: #9fb8db;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function PaymentsDashboard() {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h1>Payments</h1>
          <p>Manage and track your transaction history</p>
        </HeaderLeft>
        <HeaderRight>
          <ExportButton>
            <Download size={18} /> Export
          </ExportButton>
          
        </HeaderRight>
      </Header>

      <FilterBar>
        <DateRangePicker>
          <Calendar size={16} />
          Oct 1 - Oct 31, 2023
          <ChevronDown size={16} />
        </DateRangePicker>

        <FilterGroup>
          <FilterItem active>All</FilterItem>
          <FilterItem>Success</FilterItem>
          <FilterItem>Pending</FilterItem>
          <FilterItem>Failed</FilterItem>
        </FilterGroup>

        <FilterGroup>
          <FilterItem active>All Methods</FilterItem>
          <FilterItem>PhonePe</FilterItem>
          <FilterItem>GPay</FilterItem>
          <FilterItem>Paytm</FilterItem>
        </FilterGroup>
      </FilterBar>

      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatTitle>
              <IndianRupee size={14} /> SUCCESSFUL PAYMENTS
            </StatTitle>
            <StatIcon color="#0b5a9e">
              <TrendingUp size={20} />
            </StatIcon>
          </StatHeader>
          <StatValue>
            <IndianRupee size={28} />1,45,200
          </StatValue>
          <StatChange positive>
            <ArrowUpRight size={14} /> +12.5% vs last month
          </StatChange>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatTitle>
              <XCircle size={14} /> FAILED PAYMENTS
            </StatTitle>
            <StatIcon color="#dc3b4b">
              <TrendingDown size={20} />
            </StatIcon>
          </StatHeader>
          <StatValue>12</StatValue>
          <StatChange>
            <ArrowDownRight size={14} /> 3.2% failure rate
          </StatChange>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatTitle>
              <CreditCard size={14} /> AVERAGE ORDER VALUE
            </StatTitle>
            <StatIcon color="#22a65e">
              <IndianRupee size={20} />
            </StatIcon>
          </StatHeader>
          <StatValue>
            <IndianRupee size={28} />840
          </StatValue>
          <StatChange positive>
            <ArrowUpRight size={14} /> +8% vs last month
          </StatChange>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatTitle>
              <Clock size={14} /> TOTAL TRANSACTIONS
            </StatTitle>
            <StatIcon color="#b45f1a">
              <ArrowUpRight size={20} />
            </StatIcon>
          </StatHeader>
          <StatValue>120</StatValue>
          <StatChange positive>
            <ArrowUpRight size={14} /> 15 new today
          </StatChange>
        </StatCard>
      </StatsGrid>

      <TableContainer>
        <TableHeader>
          <TableTitle>Recent Transactions</TableTitle>
          <TableActions>
            <IconButton style={{ padding: '8px 16px' }}>
              <Eye size={16} /> Show all
            </IconButton>
            <IconButton style={{ padding: '8px 16px' }}>
              <MoreHorizontal size={16} />
            </IconButton>
          </TableActions>
        </TableHeader>

        <Table>
          <thead>
            <tr>
              <Th>Transaction ID</Th>
              <Th>Amount</Th>
              <Th>Customer</Th>
              <Th>Payment Method</Th>
              <Th>Date & Time</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <TransactionId>
                  <Hash size={14} /> MC-TXN-98421
                </TransactionId>
              </Td>
              <Td><strong>₹1,250.00</strong></Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>Rahul Sharma</CustomerName>
                  <CustomerPhone>
                    <Phone size={11} /> +91 98765 43210
                  </CustomerPhone>
                </CustomerInfo>
              </Td>
              <Td>
                <PaymentMethod>
                  <Smartphone size={14} /> PhonePe
                </PaymentMethod>
              </Td>
              <Td>Oct 24, 2023 • 10:45 AM</Td>
              <Td>
                <StatusBadge status="success">
                  <CheckCircle size={14} /> Success
                </StatusBadge>
              </Td>
            </tr>
            <tr>
              <Td>
                <TransactionId>
                  <Hash size={14} /> MC-TXN-98420
                </TransactionId>
              </Td>
              <Td><strong>₹450.00</strong></Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>Anjali Singh</CustomerName>
                  <CustomerPhone>
                    <Phone size={11} /> +91 81234 56789
                  </CustomerPhone>
                </CustomerInfo>
              </Td>
              <Td>
                <PaymentMethod>
                  <Smartphone size={14} /> GPay
                </PaymentMethod>
              </Td>
              <Td>Oct 24, 2023 • 10:32 AM</Td>
              <Td>
                <StatusBadge status="pending">
                  <Clock size={14} /> Pending
                </StatusBadge>
              </Td>
            </tr>
            <tr>
              <Td>
                <TransactionId>
                  <Hash size={14} /> MC-TXN-98419
                </TransactionId>
              </Td>
              <Td><strong>₹2,100.00</strong></Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>Karthik R.</CustomerName>
                  <CustomerPhone>
                    <Phone size={11} /> +91 70001 22334
                  </CustomerPhone>
                </CustomerInfo>
              </Td>
              <Td>
                <PaymentMethod>
                  <Smartphone size={14} /> Paytm UPI
                </PaymentMethod>
              </Td>
              <Td>Oct 24, 2023 • 09:15 AM</Td>
              <Td>
                <StatusBadge status="success">
                  <CheckCircle size={14} /> Success
                </StatusBadge>
              </Td>
            </tr>
            <tr>
              <Td>
                <TransactionId>
                  <Hash size={14} /> MC-TXN-98418
                </TransactionId>
              </Td>
              <Td><strong>₹85.00</strong></Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>Unknown Customer</CustomerName>
                  <CustomerPhone>
                    <Phone size={11} /> +91 99887 66554
                  </CustomerPhone>
                </CustomerInfo>
              </Td>
              <Td>
                <PaymentMethod>
                  <Smartphone size={14} /> Amazon Pay
                </PaymentMethod>
              </Td>
              <Td>Oct 24, 2023 • 08:50 AM</Td>
              <Td>
                <StatusBadge status="failed">
                  <XCircle size={14} /> Failed
                </StatusBadge>
              </Td>
            </tr>
            <tr>
              <Td>
                <TransactionId>
                  <Hash size={14} /> MC-TXN-98417
                </TransactionId>
              </Td>
              <Td><strong>₹3,420.00</strong></Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>Priya Verma</CustomerName>
                  <CustomerPhone>
                    <Phone size={11} /> +91 94432 11223
                  </CustomerPhone>
                </CustomerInfo>
              </Td>
              <Td>
                <PaymentMethod>
                  <Smartphone size={14} /> PhonePe
                </PaymentMethod>
              </Td>
              <Td>Oct 23, 2023 • 11:20 PM</Td>
              <Td>
                <StatusBadge status="success">
                  <CheckCircle size={14} /> Success
                </StatusBadge>
              </Td>
            </tr>
          </tbody>
        </Table>

        <Pagination>
          <PaginationInfo>
            SHOWING 1 TO 5 OF 120 TRANSACTIONS
          </PaginationInfo>
          <PaginationControls>
            <PageButton disabled>
              <ChevronLeft size={18} />
            </PageButton>
            <PageButton active>1</PageButton>
            <PageButton>2</PageButton>
            <PageButton>3</PageButton>
            <PageButton>4</PageButton>
            <PageButton>5</PageButton>
            <PageButton>
              <ChevronRight size={18} />
            </PageButton>
          </PaginationControls>
        </Pagination>
      </TableContainer>
    </Container>
  );
}