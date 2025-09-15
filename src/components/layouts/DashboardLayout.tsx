'use client'
// DashboardLayout: layout configurable para dashboard de cualquier rol
import React from 'react'
import { NavBar } from '../navbar/Navbar'
import { MenuSection, UserNavbar } from '@/types/sidebar'
import { SideBar } from '../navbar/Sidebar'
import { SectionElement } from '@/types/sidebar'
import { cn } from '@/lib/utils'
import { useStore } from '@/hooks/use-store'
import { useSidebar } from '@/hooks'
import { Footer } from './Footer'

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
  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { getOpenState, settings } = sidebar
  return (
    <>
      <NavBar menuSections={menuSections} userData={userData} />
      <SideBar menuItems={menuItems} />
      <section
        className={cn(
          'min-h-[calc(100vh_-_96px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300 relative',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-64')
        )}
      >
        {/* <section className="px-4 py-3 bg-gray-100 sticky top-14 z-20"> */}
        {/* <BreadcrumbCustom /> */}
        {/* </section> */}
        <main className="w-full container mx-auto p-4 md:p-6">
          {children}
        </main>
      </section>
      <div
        className={cn(
          'transition-[margin-left] ease-in-out duration-300',
          !settings.disabled && (!getOpenState() ? 'lg:ml-[90px]' : 'lg:ml-64')
        )}
      >
        <Footer />
      </div>
    </>
  )
}
