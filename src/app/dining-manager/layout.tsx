// Layout for Kitchen Manager

import DashboardLayout from '@/components/layouts/DashboardLayout'

export default function KitchenManagerLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout menuItems={[]} userData={null} menuSections={[]}>
      {children}
    </DashboardLayout>
  )
}
