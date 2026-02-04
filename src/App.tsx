import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import type { JSX } from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import { useAuthStore } from './store/useAuthStore';
import SuperAdminDashboard from './components/layout/SuperAdminDashboard';
import AdminDashboard from './components/layout/AdminDashboard';
// import Dashboard from './pages/Dashboard'; // Lo crearás luego

// Componente para proteger rutas
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('auth_token');

  // Si no hay token o no hay usuario cargado aún, redirigir
  if (!token) return <Navigate to="/login" />;
  
  return children;
};

const DashboardHome = () => {
  const { user } = useAuthStore();

  if (user?.role === "superadmin") return <SuperAdminDashboard />; // Tu componente con la tabla de gestión
  
  if (user?.role === "admin") return <AdminDashboard />; // Tu componente con el generador de QRs
  
  return <h3>Cargando perfil institucional...</h3>;

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
                <DashboardHome />
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