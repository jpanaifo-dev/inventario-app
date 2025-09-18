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
      userData={{
        email: 'email@example.com',
        photo: 'photo_url',
        username: 'username'
      }}
      menuSections={[
        {
          items: [
            {
              label: 'Perfil',
              href: '/dining-manager/profile'
            }
          ],
          label: 'Cuenta'
        }
      ]}
    >
      {children}
    </DashboardLayout>
  )
}
