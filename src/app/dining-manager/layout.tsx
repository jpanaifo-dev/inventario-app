// Layout for Kitchen Manager

import DashboardLayout from '@/components/layouts/DashboardLayout'

export default function KitchenManagerLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout
      menuItems={[
        {
          section: {
            id: 'section-1',
            name: 'Gestion'
          },
          menus: [
            {
              menu: {
                id: 'menu-1',
                name: 'Pecosas',
                url: '#',
                icon: null // Puedes usar cualquier icono disponible en tu biblioteca de iconos
              },
              submenus: []
            }
          ]
        }
      ]}
      userData={null}
      menuSections={[]}
    >
      {children}
    </DashboardLayout>
  )
}
