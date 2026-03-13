import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  IndianRupee, Calendar, Download, Filter, Search,
  Clock, CheckCircle, XCircle, AlertCircle, ChevronLeft, ChevronRight,
  Smartphone, Landmark, Wallet, ArrowRight, Banknote, TrendingUp,
  CreditCard, Hash, Info, Plus, MoreHorizontal, Eye, ArrowUpRight,
  RefreshCw, FileText, Settings, DollarSign, Activity
} from 'lucide-react';

// Main container
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #f8fafc;
  min-height: 100vh;
`;

// Header section
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const HeaderTitle = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 8px 0;
  }
  
  p {
    font-size: 16px;
    color: #64748b;
    margin: 0;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateY(-1px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

// Stats grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const StatTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const StatValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
`;

const StatChange = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
`;

const StatSubtitle = styled.div`
  font-size: 13px;
  color: #64748b;
`;

// Main content grid
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 24px;
`;

// Table section
const TableSection = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
`;

const TableTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const DateFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const StatusFilter = styled.select`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  
  input {
    border: none;
    background: none;
    outline: none;
    font-size: 14px;
    width: 200px;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
  }
`;

// Table
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`;

const Td = styled.td`
  padding: 16px 24px;
  font-size: 14px;
  color: #1e293b;
  border-bottom: 1px solid #f1f5f9;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  
  ${props => {
    switch(props.status) {
      case 'completed':
        return `
          background: #dcfce7;
          color: #166534;
        `;
      case 'processing':
        return `
          background: #fef3c7;
          color: #92400e;
        `;
      case 'failed':
        return `
          background: #fee2e2;
          color: #991b1b;
        `;
      default:
        return `
          background: #f1f5f9;
          color: #475569;
        `;
    }
  }}
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const Amount = styled.span`
  font-weight: 600;
  color: #1e293b;
`;

const ActionButtonSmall = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
  }
`;

// Sidebar
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const QuickActionsCard = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 24px;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const QuickAction = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 8px;
  
  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const BankAccountCard = styled.div`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 16px;
  padding: 20px;
  color: white;
`;

const BankName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const BankDetails = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const ChangeBankButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid #e2e8f0;
`;

const PaginationInfo = styled.div`
  font-size: 14px;
  color: #64748b;
`;

const PaginationControls = styled.div`
  display: flex;
  gap: 8px;
`;

const PageButton = styled.button`
  background: ${props => props.active ? '#3b82f6' : 'white'};
  color: ${props => props.active ? 'white' : '#475569'};
  border: 1px solid ${props => props.active ? '#3b82f6' : '#e2e8f0'};
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? '#2563eb' : '#f1f5f9'};
  }
`;

export default function Settlements() {
  const [dateFilter, setDateFilter] = useState('Last 30 days');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data
  const settlements = [
    {
      id: 'ST-001234',
      date: 'Oct 25, 2023',
      amount: '42,500.00',
      method: 'IMPS',
      status: 'completed',
      bank: 'HDFC Bank'
    },
    {
      id: 'ST-001233',
      date: 'Oct 24, 2023',
      amount: '18,200.00',
      method: 'NEFT',
      status: 'completed',
      bank: 'HDFC Bank'
    },
    {
      id: 'ST-001232',
      date: 'Oct 23, 2023',
      amount: '64,900.00',
      method: 'IMPS',
      status: 'processing',
      bank: 'HDFC Bank'
    },
    {
      id: 'ST-001231',
      date: 'Oct 22, 2023',
      amount: '12,400.00',
      method: 'IMPS',
      status: 'completed',
      bank: 'HDFC Bank'
    },
    {
      id: 'ST-001230',
      date: 'Oct 21, 2023',
      amount: '29,850.00',
      method: 'NEFT',
      status: 'failed',
      bank: 'HDFC Bank'
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <h1>Settlements</h1>
          <p>Manage your payouts and bank accounts</p>
        </HeaderTitle>
        <HeaderActions>
          <ActionButton>
            <Download />
            Export
          </ActionButton>
          <ActionButton>
            <Plus />
            New Settlement
          </ActionButton>
          <ActionButton>
            <Settings />
            Settings
          </ActionButton>
        </HeaderActions>
      </Header>

      <StatsGrid>
        <StatCard>
          <StatHeader>
            <StatTitle>
              <Wallet />
              Available Balance
            </StatTitle>
          </StatHeader>
          <StatValue>₹12,840.00</StatValue>
          <StatChange positive>
            <TrendingUp />
            +12.5% from last month
          </StatChange>
          <StatSubtitle>Next payout: Tomorrow at 11:00 PM</StatSubtitle>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatTitle>
              <Activity />
              This Month
            </StatTitle>
          </StatHeader>
          <StatValue>₹2,45,600</StatValue>
          <StatChange positive>
            <TrendingUp />
            +8.2% growth
          </StatChange>
          <StatSubtitle>12 settlements processed</StatSubtitle>
        </StatCard>

        <StatCard>
          <StatHeader>
            <StatTitle>
              <DollarSign />
              Total Settled
            </StatTitle>
          </StatHeader>
          <StatValue>₹18,45,000</StatValue>
          <StatChange positive>
            <TrendingUp />
            +24.8% YTD
          </StatChange>
          <StatSubtitle>Since Jan 2023</StatSubtitle>
        </StatCard>
      </StatsGrid>

      <ContentGrid>
        <TableSection>
          <TableHeader>
            <TableTitle>
              <FileText />
              Settlement History
            </TableTitle>
            <FilterSection>
              <DateFilter>
                <Calendar />
                {dateFilter}
                <ChevronRight />
              </DateFilter>
              <StatusFilter value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="failed">Failed</option>
              </StatusFilter>
              <SearchBox>
                <Search />
                <input 
                  type="text" 
                  placeholder="Search settlements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </SearchBox>
            </FilterSection>
          </TableHeader>

          <Table>
            <thead>
              <tr>
                <Th>Settlement ID</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
                <Th>Method</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>
            <tbody>
              {settlements.map((settlement) => (
                <tr key={settlement.id}>
                  <Td>
                    <span style={{ fontWeight: 600, color: '#3b82f6' }}>
                      {settlement.id}
                    </span>
                  </Td>
                  <Td>{settlement.date}</Td>
                  <Td>
                    <Amount>₹{settlement.amount}</Amount>
                  </Td>
                  <Td>
                    <span style={{ 
                      background: settlement.method === 'IMPS' ? '#dbeafe' : '#f3f4f6',
                      color: settlement.method === 'IMPS' ? '#1e40af' : '#6b21a8',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {settlement.method}
                    </span>
                  </Td>
                  <Td>
                    <StatusBadge status={settlement.status}>
                      {settlement.status === 'completed' && <CheckCircle />}
                      {settlement.status === 'processing' && <Clock />}
                      {settlement.status === 'failed' && <XCircle />}
                      {settlement.status}
                    </StatusBadge>
                  </Td>
                  <Td>
                    <ActionButtonSmall>
                      <Eye />
                    </ActionButtonSmall>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <PaginationInfo>
              Showing 1-5 of {settlements.length} settlements
            </PaginationInfo>
            <PaginationControls>
              <PageButton disabled>
                <ChevronLeft />
              </PageButton>
              <PageButton active>1</PageButton>
              <PageButton>2</PageButton>
              <PageButton>3</PageButton>
              <PageButton>
                <ChevronRight />
              </PageButton>
            </PaginationControls>
          </Pagination>
        </TableSection>

        <Sidebar>
          <QuickActionsCard>
            <CardTitle>
              <RefreshCw />
              Quick Actions
            </CardTitle>
            <QuickAction>
              <span>Settle Now</span>
              <ArrowUpRight />
            </QuickAction>
            <QuickAction>
              <span>Download Report</span>
              <Download />
            </QuickAction>
            <QuickAction>
              <span>View Schedule</span>
              <Calendar />
            </QuickAction>
          </QuickActionsCard>

          <BankAccountCard>
            <CardTitle style={{ color: 'white', marginBottom: '16px' }}>
              <Landmark />
              Primary Bank Account
            </CardTitle>
            <BankName>HDFC Bank</BankName>
            <BankDetails>
              Account: ••••••••••4567<br />
              IFSC: HDFC0001234<br />
              Branch: Mumbai Main
            </BankDetails>
            <ChangeBankButton>
              Change Bank
              <ArrowRight />
            </ChangeBankButton>
          </BankAccountCard>
        </Sidebar>
      </ContentGrid>
    </Container>
  );
}