// DashboardLayout: layout configurable para dashboard de cualquier rol
import React from 'react';

interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  navbar: React.ReactNode;
  userDropdown: React.ReactNode;
  children: React.ReactNode;
  // Puedes agregar más props para otros componentes
}

export default function DashboardLayout({
  sidebar,
  navbar,
  userDropdown,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      {navbar}
      <div className="dashboard-content">
        {sidebar}
        <div className="dashboard-main">
          {userDropdown}
          {children}
        </div>
      </div>
    </div>
  );
}
