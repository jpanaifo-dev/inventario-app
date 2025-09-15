// DashboardLayout: layout configurable para dashboard de cualquier rol
import React from 'react'
import { NavBar } from '../navbar/Navbar'
import { MenuSection, UserNavbar } from '@/types/sidebar'
import { SideBar } from '../navbar/Sidebar'
import { SectionElement } from '@/types/sidebar'

interface DashboardLayoutProps {
  userData: UserNavbar | null
  menuSections?: MenuSection[]
  menuItems: SectionElement[]
  children: React.ReactNode
  // Puedes agregar más props para otros componentes
}

export default function DashboardLayout({
  userData,
  menuSections,
  menuItems,
  children
}: DashboardLayoutProps) {
  return (
    <div className="dashboard-layout">
      <NavBar menuSections={menuSections} userData={userData} />
      <div className="dashboard-content">
        <SideBar menuItems={menuItems} />
        <div className="dashboard-main">{children}</div>
      </div>
    </div>
  )
}
