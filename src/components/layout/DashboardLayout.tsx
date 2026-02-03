// src/components/layout/DashboardLayout.tsx
import type { ReactNode } from 'react';
import './css/DashboardLayout.css';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="data">
        <Header />
        <main>
            {children}
        </main>
    </div>
  );
};

export default DashboardLayout;