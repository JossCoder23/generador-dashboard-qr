import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import type { JSX } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
// import Dashboard from './pages/Dashboard'; // Lo crearás luego

// Componente para proteger rutas
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('auth_token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <DashboardLayout>
                <></>
              </DashboardLayout>
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;