import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Main container - full screen with centered content
const LoginContainer = styled.div`
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Centered Card
const LoginCard = styled.div`
  max-width: 480px;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  padding: 48px 40px;
  max-height: 90vh;
  overflow-y: auto;
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ff7a00;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #e66a00;
  }
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 32px;
  
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0 0 4px 0;
    color: #000;
    
    span {
      color: #ff7a00;
    }
  }
  
  p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 16px;
`;

const Tab = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 10px;
  font-size: 16px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#f97316' : '#666'};
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => props.active ? '#f97316' : 'transparent'};
    border-radius: 2px 2px 0 0;
  }
  
  &:hover {
    color: ${props => props.active ? '#f97316' : '#4b5563'};
  }
`;

const Form = styled.form`
  display: ${props => props.hidden ? 'none' : 'block'};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 6px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 15px;
  color: #000;
  background: #ffffff;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #f97316;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    color: #4b5563;
  }
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #f97316;
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #f97316;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #f97316;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background 0.2s;
  
  &:hover {
    background: #ea580c;
  }
  
  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
  }
`;

const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 24px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e5e7eb;
  }
  
  span {
    position: relative;
    background: #ffffff;
    padding: 0 16px;
    color: #9ca3af;
    font-size: 14px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-size: 14px;
  color: #4b5563;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #f9fafb;
  }
`;

const TermsText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
  
  a {
    color: #f97316;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #b91c1c;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SuccessMessage = styled.div`
  background: #d1fae5;
  color: #065f46;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Check if user is already logged in
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('tattvamPayCurrentUser') || '{}');
    if (currentUser.isLoggedIn) {
      window.location.href = '/dashboard';
    }
  }, []);
  
  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Register form state
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    shopName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: type === 'checkbox' ? checked : value
    });
    if (error) setError('');
  };
  
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: type === 'checkbox' ? checked : value
    });
    if (error) setError('');
    if (success) setSuccess('');
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!loginForm.email || !loginForm.password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!loginForm.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Get stored users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('tattvamPayUsers') || '[]');
      
      // Find user with matching email and password
      const authenticatedUser = storedUsers.find(user => 
        user.email === loginForm.email && user.password === loginForm.password
      );
      
      if (authenticatedUser) {
        // Store current user session
        localStorage.setItem('tattvamPayCurrentUser', JSON.stringify({
          fullName: authenticatedUser.fullName,
          shopName: authenticatedUser.shopName,
          email: authenticatedUser.email,
          phone: authenticatedUser.phone,
          isLoggedIn: true
        }));
        
        setSuccess('Login successful! Redirecting to dashboard...');
        
        // Redirect to dashboard after 1 second
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      } else {
        setError('Invalid email or password');
      }
    }, 1500);
  };
  
  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation
    if (!registerForm.fullName || !registerForm.shopName || !registerForm.email || !registerForm.phone || !registerForm.password || !registerForm.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!registerForm.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (registerForm.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!registerForm.agreeTerms) {
      setError('Please agree to the Terms and Privacy Policy');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      // Store user details in localStorage
      const userData = {
        fullName: registerForm.fullName,
        shopName: registerForm.shopName,
        email: registerForm.email,
        phone: registerForm.phone,
        password: registerForm.password, // In production, this should be hashed
        createdAt: new Date().toISOString()
      };
      
      // Get existing users or create new array
      const existingUsers = JSON.parse(localStorage.getItem('tattvamPayUsers') || '[]');
      
      // Check if email already exists
      if (existingUsers.find(user => user.email === registerForm.email)) {
        setError('An account with this email already exists');
        return;
      }
      
      // Add new user
      existingUsers.push(userData);
      localStorage.setItem('tattvamPayUsers', JSON.stringify(existingUsers));
      
      setSuccess('Account created successfully! You can now login.');
      
      // Reset form
      setRegisterForm({
        fullName: '',
        shopName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      });
      
      // Switch to login tab after 2 seconds
      setTimeout(() => {
        setActiveTab('login');
        setSuccess('');
      }, 2000);
    }, 1500);
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <h1>Tattvam<span>Pay</span></h1>
          <p>Merchant Dashboard</p>
        </Logo>
        
        <TabContainer>
          <Tab 
            active={activeTab === 'login'} 
            onClick={() => {
              setActiveTab('login');
              setError('');
              setSuccess('');
            }}
          >
            Sign In
          </Tab>
          <Tab 
            active={activeTab === 'register'} 
            onClick={() => {
              setActiveTab('register');
              setError('');
              setSuccess('');
            }}
          >
            Create Account
          </Tab>
        </TabContainer>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        {/* Login Form */}
        <Form hidden={activeTab !== 'login'} onSubmit={handleLogin}>
          <FormGroup>
            <Label>EMAIL ADDRESS</Label>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginForm.email}
                onChange={handleLoginChange}
                disabled={isLoading}
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label>PASSWORD</Label>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={loginForm.password}
                onChange={handleLoginChange}
                disabled={isLoading}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </PasswordToggle>
            </InputWrapper>
          </FormGroup>
          
          <FormOptions>
            <RememberMe>
              <Checkbox
                type="checkbox"
                name="rememberMe"
                checked={loginForm.rememberMe}
                onChange={handleLoginChange}
              />
              Remember me
            </RememberMe>
            
            <ForgotPassword href="#">Forgot password?</ForgotPassword>
          </FormOptions>
          
          <ActionButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </ActionButton>
        </Form>
        
        {/* Register Form */}
        <Form hidden={activeTab !== 'register'} onSubmit={handleRegister}>
          <FormGroup>
            <Label>FULL NAME</Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={registerForm.fullName}
              onChange={handleRegisterChange}
              disabled={isLoading}
            />
          </FormGroup>
          
          <FormGroup>
            <Label>SHOP NAME</Label>
            <Input
              type="text"
              name="shopName"
              placeholder="Enter your shop name"
              value={registerForm.shopName}
              onChange={handleRegisterChange}
              disabled={isLoading}
            />
          </FormGroup>
          
          <FormGroup>
            <Label>EMAIL ADDRESS</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={registerForm.email}
              onChange={handleRegisterChange}
              disabled={isLoading}
            />
          </FormGroup>
          
          <FormGroup>
            <Label>PHONE NUMBER</Label>
            <InputWrapper>
              <Input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={registerForm.phone}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label>PASSWORD</Label>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </PasswordToggle>
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label>CONFIRM PASSWORD</Label>
            <InputWrapper>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={registerForm.confirmPassword}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </PasswordToggle>
            </InputWrapper>
          </FormGroup>
          
          <FormOptions>
            <RememberMe>
              <Checkbox
                type="checkbox"
                name="agreeTerms"
                checked={registerForm.agreeTerms}
                onChange={handleRegisterChange}
              />
              I agree to the Terms and Privacy Policy
            </RememberMe>
          </FormOptions>
          
          <ActionButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create Account'}
          </ActionButton>
        </Form>
        
        <Divider>
          <span>or continue with</span>
        </Divider>
        
        <SocialButtons>
          <SocialButton>
            <span>G</span>
            Google
          </SocialButton>
          <SocialButton>
            <span>⌘</span>
            Apple
          </SocialButton>
        </SocialButtons>
        
        <TermsText>
          By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </TermsText>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;