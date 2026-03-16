import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { 
  User,
  CreditCard,
  Shield,
  Bell,
  Smartphone,
  Mail,
  Lock,
  Key,
  Settings,
  LogOut,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Plus,
  Download,
  HelpCircle,
  Globe,
  Wifi,
  Database,
  Eye,
  EyeOff
} from "lucide-react";

// Main container - full screen with flex
const SettingsContainer = styled.div`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Sidebar
const Sidebar = styled.div`
  width: 280px;
  background: #f9fafb;
  border-right: 1px solid #e5e7eb;
  padding: 30px 0;
  
  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 20px 0;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px 24px;
  border-bottom: 1px solid #e5e7eb;
  
  @media (max-width: 768px) {
    padding: 0 20px 20px 20px;
  }
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #000;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  
  p {
    font-size: 14px;
    color: #666;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

const SidebarMenu = styled.div`
  padding: 24px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 4px;
  border-radius: 8px;
  background: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#f97316' : '#4b5563'};
  font-weight: ${props => props.active ? '500' : '400'};
  cursor: pointer;
  box-shadow: ${props => props.active ? '0 2px 8px rgba(0,0,0,0.05)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    gap: 10px;
  }
  
  svg {
    width: 18px;
    height: 18px;
    
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
  
  span {
    font-size: 14px;
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
  
  &:hover {
    background: ${props => props.active ? '#ffffff' : '#f3f4f6'};
  }
`;

// Main Content Area
const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  background: #ffffff;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
  
  @media (max-height: 600px) and (orientation: portrait) {
    padding: 25px;
  }
  
  @media (max-height: 500px) and (orientation: portrait) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 30px 0 20px 0;
  color: #000;
`;

const InfoCard = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
`;

// Profile Styles
const ProfileInfoRow = styled.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 5px;
`;

const ProfileValue = styled.div`
  font-size: 18px;
  color: #000;
`;

const ProfileInput = styled.input`
  font-size: 18px;
  color: #000;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 8px 12px;
  width: 100%;
  max-width: 300px;
  
  &:focus {
    outline: none;
    border-color: #f97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }
`;

const ProfileSaveButton = styled.button`
  background: #f97316;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background: #ea580c;
  }
`;

// Bank Account Styles
const AccountCard = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
`;

const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const AccountTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: #000;
`;

const AccountDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 20px 0;
`;

const BankDetails = styled.div`
  margin-bottom: 20px;
`;

const BankName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 5px;
`;

const AccountName = styled.div`
  font-size: 14px;
  color: #666;
`;

const ChangeLink = styled.a`
  color: #f97316;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PayoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PayoutInfo = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #000;
  }
  
  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

const PayoutButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
  
  &:hover {
    background: #f3f4f6;
  }
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
  flex-shrink: 0;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background-color: #f97316;
  }
  
  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .3s;
  border-radius: 24px;
  
  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: .3s;
    border-radius: 50%;
  }
`;

const AddButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    background: #f3f4f6;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  background: #f9fafb;
  border-radius: 12px;
`;

const EmptyStateTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0 0 8px 0;
`;

const EmptyStateText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const SecurityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SecurityInfo = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #000;
  }
  
  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

const SecurityButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
  
  &:hover {
    background: #f3f4f6;
  }
`;

const RecommendationBadge = styled.span`
  background: #fef3c7;
  color: #92400e;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-left: 8px;
`;

const TwoFactorSection = styled.div`
  margin-top: 10px;
`;

const TwoFactorItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TwoFactorInfo = styled.div`
  h5 {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #000;
  }
  
  p {
    font-size: 13px;
    color: #666;
    margin: 0;
  }
`;

const DeviceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DeviceInfo = styled.div`
  h5 {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #000;
  }
  
  p {
    font-size: 13px;
    color: #666;
    margin: 0;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 13px;
  color: #4b5563;
  cursor: pointer;
  
  &:hover {
    background: #f3f4f6;
  }
`;

const ActiveBadge = styled.span`
  color: #10b981;
  font-weight: 500;
`;

const ViewLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  color: #f97316;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Notification Components
const NotificationSection = styled.div`
  margin-bottom: 30px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const NotificationName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const NotificationDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.5;
`;

// Profile specific styles
const ProfileCard = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 30px 0;
`;

// Security Item for Profile tab
const ProfileSecurityItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfileSecurityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ProfileSecurityTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #000;
`;

const ProfileSecurityDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    fullName: '',
    shopName: '',
    email: '',
    mobile: ''
  });
  
  // Load user data from localStorage on component mount
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('tattvamPayCurrentUser') || '{}');
    if (currentUser.isLoggedIn && currentUser.fullName) {
      setProfileData({
        fullName: currentUser.fullName || '',
        shopName: currentUser.shopName || '',
        email: currentUser.email || '',
        mobile: currentUser.phone || ''
      });
    }
  }, []);
  
  const [twoFactorMethods, setTwoFactorMethods] = useState({
    sms: true,
    authenticatorApp: false
  });
  
  // Main two-factor authentication toggle state
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  // Bank settings state
  const [autoSettlements, setAutoSettlements] = useState(true);
  
  // Notification toggles state
  const [notificationSettings, setNotificationSettings] = useState({
    realTimePayment: true,
    dailySalesSummary: true,
    settlementNotifications: true,
    newDeviceLogin: true,
    passwordChangeConfirmation: true,
    productFeatureUpdates: false,
    offersPromotions: false
  });
  
  const toggleTwoFactorMethod = (method) => {
    setTwoFactorMethods({
      ...twoFactorMethods,
      [method]: !twoFactorMethods[method]
    });
  };
  
  const toggleNotification = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    });
  };
  
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'bank', label: 'Bank Account', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];
  
  return (
    <SettingsContainer>
      <Sidebar>
        <SidebarHeader>
          <h2>Settings</h2>
          <p>Manage your account</p>
        </SidebarHeader>
        <SidebarMenu>
          {menuItems.map(item => (
            <MenuItem 
              key={item.id}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon />
              {item.label}
            </MenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>
      
      <MainContent>
        <ContentWrapper>
          <Header>
            <Title>
              {activeTab === 'profile' && 'Profile Settings'}
              {activeTab === 'bank' && 'Bank Account'}
              {activeTab === 'security' && 'Security Settings'}
              {activeTab === 'notifications' && 'Notification Settings'}
            </Title>
            <Subtitle>
              {activeTab === 'profile' && 'Manage your personal information and shop details'}
              {activeTab === 'bank' && 'Manage your bank accounts, settlement preferences, and security'}
              {activeTab === 'security' && 'Manage your login credentials, two-factor authentication, and active sessions'}
              {activeTab === 'notifications' && 'Stay updated on your payment activity and account security'}
            </Subtitle>
          </Header>

          {activeTab === 'profile' && (
            <>
              <SectionTitle><User style={{ marginRight: '8px' }} />Personal Information</SectionTitle>
              
              <ProfileCard>
                <ProfileInfoRow>
                  <ProfileLabel><User style={{ width: '16px', height: '16px', marginRight: '8px' }} />FULL NAME</ProfileLabel>
                  <ProfileInput 
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                  />
                </ProfileInfoRow>
                
                <ProfileInfoRow>
                  <ProfileLabel><Settings style={{ width: '16px', height: '16px', marginRight: '8px' }} />SHOP NAME</ProfileLabel>
                  <ProfileInput 
                    type="text"
                    value={profileData.shopName}
                    onChange={(e) => setProfileData({...profileData, shopName: e.target.value})}
                  />
                </ProfileInfoRow>
                
                <ProfileInfoRow>
                  <ProfileLabel><Mail style={{ width: '16px', height: '16px', marginRight: '8px' }} />EMAIL ADDRESS</ProfileLabel>
                  <ProfileInput 
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                </ProfileInfoRow>
                
                <ProfileInfoRow>
                  <ProfileLabel><Smartphone style={{ width: '16px', height: '16px', marginRight: '8px' }} />MOBILE NUMBER</ProfileLabel>
                  <ProfileInput 
                    type="tel"
                    value={profileData.mobile}
                    onChange={(e) => setProfileData({...profileData, mobile: e.target.value})}
                  />
                </ProfileInfoRow>
                
                <ProfileSaveButton onClick={() => alert('Profile saved successfully!')}>Save Profile Changes</ProfileSaveButton>
              </ProfileCard>

              <Divider />

              <SectionTitle><CreditCard style={{ marginRight: '8px' }} />Linked Bank Account</SectionTitle>
              
              <ProfileCard>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', color: '#f97316' }}>
                  <CreditCard style={{ width: '24px', height: '24px', marginRight: '10px' }} />
                  <span style={{ fontSize: '18px', fontWeight: '600' }}>Bank Account</span>
                </div>
                <ProfileInfoRow>
                  <BankName><CreditCard style={{ width: '16px', height: '16px', marginRight: '8px' }} />HDFC Bank</BankName>
                  <AccountName>TattvamPay</AccountName>
                </ProfileInfoRow>
                
                <ProfileSaveButton>Update Bank Details</ProfileSaveButton>
              </ProfileCard>

              <Divider />

              <SectionTitle><Shield style={{ marginRight: '8px' }} />Security & Access</SectionTitle>
              
              <ProfileCard>
                <ProfileSecurityItem>
                  <ProfileSecurityHeader>
                    <ProfileSecurityTitle><Lock style={{ width: '16px', height: '16px', marginRight: '8px' }} />Account Password</ProfileSecurityTitle>
                    <SecurityButton>Change Password</SecurityButton>
                  </ProfileSecurityHeader>
                  <ProfileSecurityDescription>
                    Regularly updating your password improves security
                  </ProfileSecurityDescription>
                </ProfileSecurityItem>

                <ProfileSecurityItem>
                  <ProfileSecurityHeader>
                    <ProfileSecurityTitle><Key style={{ width: '16px', height: '16px', marginRight: '8px' }} />Two-factor Authentication</ProfileSecurityTitle>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={twoFactorEnabled}
                        onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </ProfileSecurityHeader>
                  <ProfileSecurityDescription>
                    Add an extra layer of security to your merchant account
                  </ProfileSecurityDescription>
                </ProfileSecurityItem>
              </ProfileCard>
            </>
          )}

          {activeTab === 'bank' && (
            <>
              <SectionTitle><CreditCard style={{ marginRight: '8px' }} />Primary Settlement Account</SectionTitle>
              <AccountDescription>The main account where your daily QR payments are settled.</AccountDescription>
              
              <AccountCard>
                <AccountHeader>
                  <BankDetails>
                    <BankName><CreditCard style={{ width: '16px', height: '16px', marginRight: '8px' }} />HDFC Bank</BankName>
                    <AccountName>TattvamPay</AccountName>
                  </BankDetails>
                  <ChangeLink>Change</ChangeLink>
                </AccountHeader>
              </AccountCard>

              <SectionTitle><RefreshCw style={{ marginRight: '8px' }} />Payout Settings</SectionTitle>
              
              <AccountCard>
                <PayoutItem>
                  <PayoutInfo>
                    <h4><RefreshCw style={{ width: '16px', height: '16px', marginRight: '8px' }} />Automatic Daily Settlements</h4>
                    <p>Automatically settle funds to your primary account every day at 11:00 PM</p>
                  </PayoutInfo>
                  <Toggle>
                    <ToggleInput 
                      type="checkbox" 
                      checked={autoSettlements}
                      onChange={() => setAutoSettlements(!autoSettlements)}
                    />
                    <ToggleSlider />
                  </Toggle>
                </PayoutItem>

                <PayoutItem>
                  <PayoutInfo>
                    <h4><RefreshCw style={{ width: '16px', height: '16px', marginRight: '8px' }} />Manual Settle Now</h4>
                    <p>Initiate an immediate transfer of your current balance</p>
                  </PayoutInfo>
                  <PayoutButton>Settle Now</PayoutButton>
                </PayoutItem>
              </AccountCard>

              <SectionTitle><Plus style={{ marginRight: '8px' }} />Secondary Accounts</SectionTitle>
              
              <AddButton><Plus style={{ width: '16px', height: '16px', marginRight: '8px' }} /> Add New Bank Account</AddButton>
              
              <EmptyState>
                <EmptyStateTitle>No secondary accounts linked</EmptyStateTitle>
                <EmptyStateText>
                  Link additional accounts to easily switch your settlement destination when needed.
                </EmptyStateText>
              </EmptyState>
            </>
          )}

          {activeTab === 'security' && (
            <>
              <SectionTitle><Lock style={{ marginRight: '8px' }} />Login & Password</SectionTitle>
              <Subtitle style={{ marginBottom: '20px' }}>Manage your password and sign-in methods.</Subtitle>
              
              <InfoCard>
                <SecurityItem>
                  <SecurityInfo>
                    <h4><Lock style={{ width: '16px', height: '16px', marginRight: '8px' }} />Password</h4>
                    <p>Last changed 3 months ago</p>
                  </SecurityInfo>
                  <SecurityButton>Change Password</SecurityButton>
                </SecurityItem>
              </InfoCard>

              <SectionTitle><Shield style={{ marginRight: '8px' }} />Two-Factor Authentication</SectionTitle>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <Subtitle style={{ margin: 0 }}>Add an extra layer of security to your account.</Subtitle>
                <RecommendationBadge>RECOMMENDED</RecommendationBadge>
              </div>
              
              <InfoCard>
                <TwoFactorSection>
                  <TwoFactorItem>
                    <TwoFactorInfo>
                      <h5><Smartphone style={{ width: '16px', height: '16px', marginRight: '8px' }} />SMS Authentication</h5>
                      <p>Receive a code via text message to sign in.</p>
                    </TwoFactorInfo>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={twoFactorMethods.sms}
                        onChange={() => toggleTwoFactorMethod('sms')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </TwoFactorItem>

                  <TwoFactorItem>
                    <TwoFactorInfo>
                      <h5><Key style={{ width: '16px', height: '16px', marginRight: '8px' }} />Authenticator App</h5>
                      <p>Use apps like Google Authenticator or Authy.</p>
                    </TwoFactorInfo>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={twoFactorMethods.authenticatorApp}
                        onChange={() => toggleTwoFactorMethod('authenticatorApp')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </TwoFactorItem>
                </TwoFactorSection>
              </InfoCard>

              <SectionTitle><Wifi style={{ marginRight: '8px' }} />Authorized Devices</SectionTitle>
              
              <InfoCard>
                <DeviceItem>
                  <DeviceInfo>
                    <h5><Database style={{ width: '16px', height: '16px', marginRight: '8px' }} />MacBook Pro</h5>
                    <p>Mumbai, India • <ActiveBadge>Currently Active</ActiveBadge></p>
                  </DeviceInfo>
                  <LogoutButton><LogOut style={{ width: '14px', height: '14px', marginRight: '6px' }} />Log Out</LogoutButton>
                </DeviceItem>

                <DeviceItem>
                  <DeviceInfo>
                    <h5><Smartphone style={{ width: '16px', height: '16px', marginRight: '8px' }} />iPhone 15</h5>
                    <p>Bangalore, India • Last used 2 hours ago</p>
                  </DeviceInfo>
                  <LogoutButton><LogOut style={{ width: '14px', height: '14px', marginRight: '6px' }} />Log Out</LogoutButton>
                </DeviceItem>
              </InfoCard>

              <ViewLink><Eye style={{ width: '14px', height: '14px', marginRight: '6px' }} />View recent security activity →</ViewLink>
            </>
          )}

          {activeTab === 'notifications' && (
            <>
              <SectionTitle><Bell style={{ marginRight: '8px' }} />Transaction Alerts</SectionTitle>
              <Subtitle style={{ marginBottom: '20px' }}>Stay updated on your payment activity.</Subtitle>
              
              <InfoCard>
                <NotificationSection>
                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><CheckCircle style={{ width: '16px', height: '16px', marginRight: '8px' }} />Real-time Payment Success (SMS & Email)</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        Instant notification for every successful QR payment.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.realTimePayment}
                        onChange={() => toggleNotification('realTimePayment')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>

                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><Bell style={{ width: '16px', height: '16px', marginRight: '8px' }} />Daily Sales Summary (Email)</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        A comprehensive report of your daily business volume.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.dailySalesSummary}
                        onChange={() => toggleNotification('dailySalesSummary')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>

                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><RefreshCw style={{ width: '16px', height: '16px', marginRight: '8px' }} />Settlement Notifications</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        Alerts when funds are successfully transferred to your bank.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.settlementNotifications}
                        onChange={() => toggleNotification('settlementNotifications')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>
                </NotificationSection>
              </InfoCard>

              <SectionTitle><Shield style={{ marginRight: '8px' }} />Account Security</SectionTitle>
              <Subtitle style={{ marginBottom: '20px' }}>Protect your merchant account with critical alerts.</Subtitle>
              
              <InfoCard>
                <NotificationSection>
                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><AlertCircle style={{ width: '16px', height: '16px', marginRight: '8px' }} />New Device Login Alerts</NotificationName>
                        <RecommendationBadge>RECOMMENDED</RecommendationBadge>
                      </NotificationHeader>
                      <NotificationDescription>
                        Get notified immediately when your account is accessed from a new device.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.newDeviceLogin}
                        onChange={() => toggleNotification('newDeviceLogin')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>

                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><Lock style={{ width: '16px', height: '16px', marginRight: '8px' }} />Password Change Confirmation</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        Receive a confirmation alert whenever your password is updated.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.passwordChangeConfirmation}
                        onChange={() => toggleNotification('passwordChangeConfirmation')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>
                </NotificationSection>
              </InfoCard>

              <SectionTitle><HelpCircle style={{ marginRight: '8px' }} />Marketing & Updates</SectionTitle>
              <Subtitle style={{ marginBottom: '20px' }}>News about our platform and exclusive offers.</Subtitle>
              
              <InfoCard>
                <NotificationSection>
                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><Bell style={{ width: '16px', height: '16px', marginRight: '8px' }} />Product Feature Updates</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        Be the first to know about new tools and system enhancements.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.productFeatureUpdates}
                        onChange={() => toggleNotification('productFeatureUpdates')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>

                  <NotificationItem>
                    <NotificationContent>
                      <NotificationHeader>
                        <NotificationName><HelpCircle style={{ width: '16px', height: '16px', marginRight: '8px' }} />Offers & Promotions</NotificationName>
                      </NotificationHeader>
                      <NotificationDescription>
                        Receive marketing communications and promotional deals.
                      </NotificationDescription>
                    </NotificationContent>
                    <Toggle>
                      <ToggleInput 
                        type="checkbox" 
                        checked={notificationSettings.offersPromotions}
                        onChange={() => toggleNotification('offersPromotions')}
                      />
                      <ToggleSlider />
                    </Toggle>
                  </NotificationItem>
                </NotificationSection>
              </InfoCard>
            </>
          )}
        </ContentWrapper>
      </MainContent>
    </SettingsContainer>
  );
};

export default SettingsPage;