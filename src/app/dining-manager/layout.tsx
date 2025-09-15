// Layout for Kitchen Manager
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { menuDiningManager } from './menu'

export default function KitchenManagerLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout
      menuItems={menuDiningManager}
      userData={null}
      menuSections={[]}
    >
      {children}
    </DashboardLayout>
  )
}
