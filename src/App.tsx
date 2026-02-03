import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import type { JSX } from 'react';
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
        {/* Ruta Pública */}
        <Route path="/login" element={<Login />} />

        {/* Ruta Protegida: Solo entras si hay token */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <div>Hola, este es tu Dashboard</div> 
            </PrivateRoute>
          } 
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;