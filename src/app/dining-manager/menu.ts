import { SectionElement } from '@/types/sidebar'
import {
  ClipboardList,
  FileText,
  Package,
  LogIn,
  LogOut,
  Box,
  Warehouse,
  Truck,
  Users,
  Settings
} from 'lucide-react'

const BASE_PATH = '/dining-manager'

export const menuDiningManager: SectionElement[] = [
  {
    section: {
      id: 'section-management',
      name: 'Management'
    },
    menus: [
      {
        menu: {
          id: 'menu-pecosas',
          name: 'Pecosas',
          url: `${BASE_PATH}/pecosas`,
          icon: ClipboardList
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'section-tracking',
      name: 'Tracking'
    },
    menus: [
      {
        menu: {
          id: 'menu-requests',
          name: 'Requests',
          url: `${BASE_PATH}/requests`,
          icon: FileText
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-inventory',
          name: 'Inventory',
          url: `${BASE_PATH}/inventory`,
          icon: Package
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-income',
          name: 'Income',
          url: `${BASE_PATH}/income`,
          icon: LogIn
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-outcomes',
          name: 'Outcomes',
          url: `${BASE_PATH}/outcomes`,
          icon: LogOut
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'section-records',
      name: 'Records'
    },
    menus: [
      {
        menu: {
          id: 'menu-products',
          name: 'Products',
          url: `${BASE_PATH}/products`,
          icon: Box
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-warehouses',
          name: 'Warehouses',
          url: `${BASE_PATH}/warehouses`,
          icon: Warehouse
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-suppliers',
          name: 'Suppliers',
          url: `${BASE_PATH}/suppliers`,
          icon: Truck
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-users',
          name: 'Users',
          url: `${BASE_PATH}/users`,
          icon: Users
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'section-configuration',
      name: 'Configuration'
    },
    menus: [
      {
        menu: {
          id: 'menu-accounts',
          name: 'Accounts',
          url: `${BASE_PATH}/accounts`,
          icon: Settings
        },
        submenus: []
      }
    ]
  }
]
