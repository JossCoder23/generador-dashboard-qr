// src/components/layout/DashboardLayout.tsx
import type { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
    </>
  );
};

export default DashboardLayout;