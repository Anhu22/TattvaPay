import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout";
import Hero from "./components/Hero";
import BusinessSection from "./components/BusinessSection";
import Steps from "./components/Steps";
import ControlSection from "./components/ControlSection";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import BuyNow from "./pages/BuyNow";
import OrderSuccess from "./pages/OrderSuccess";
import Dashboard from "./pages/Dashboard";
import QRGenerator from "./pages/QR-Generator";
import Payments from "./pages/Payments";
import Settlements from "./pages/Settlements";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import StartDemo from "./pages/StartDemo";
import Devices from "./pages/Devices";

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/qr-generator') || location.pathname.startsWith('/payments') || location.pathname.startsWith('/settlements') || location.pathname.startsWith('/devices') || location.pathname.startsWith('/settings');

  return (
    <>
      <GlobalStyles />
      {isDashboard ? (
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/qr-generator" element={<QRGenerator />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/settlements" element={<Settlements />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </DashboardLayout>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BusinessSection />
                <Steps />
                <ControlSection />
                <Demo />
                <Footer />
              </>
            } />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/start-demo" element={<StartDemo />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;