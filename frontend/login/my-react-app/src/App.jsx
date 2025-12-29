import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="/verify" element={<div>Verify Page</div>} />
        <Route path="/kyc-form" element={<div>KYC Form</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
