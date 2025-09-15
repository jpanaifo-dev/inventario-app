'use client'
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

export const menuDiningManager = [
  {
    section: {
      id: 'seccion-gestion',
      name: 'Gestión'
    },
    menus: [
      {
        menu: {
          id: 'menu-pecosas',
          name: 'Pecosas',
          url: `${BASE_PATH}/requisitions`,
          icon: ClipboardList
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'seccion-seguimiento',
      name: 'Seguimiento'
    },
    menus: [
      {
        menu: {
          id: 'menu-solicitudes',
          name: 'Solicitudes',
          url: `${BASE_PATH}/requests`,
          icon: FileText
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-inventario',
          name: 'Inventario',
          url: `${BASE_PATH}/inventory`,
          icon: Package
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-ingresos',
          name: 'Ingresos',
          url: `${BASE_PATH}/income`,
          icon: LogIn
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-egresos',
          name: 'Egresos',
          url: `${BASE_PATH}/outcomes`,
          icon: LogOut
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'seccion-registros',
      name: 'Registros'
    },
    menus: [
      {
        menu: {
          id: 'menu-productos',
          name: 'Productos',
          url: `${BASE_PATH}/products`,
          icon: Box
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-almacenes',
          name: 'Almacenes',
          url: `${BASE_PATH}/warehouses`,
          icon: Warehouse
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-proveedores',
          name: 'Proveedores',
          url: `${BASE_PATH}/suppliers`,
          icon: Truck
        },
        submenus: []
      },
      {
        menu: {
          id: 'menu-usuarios',
          name: 'Usuarios',
          url: `${BASE_PATH}/users`,
          icon: Users
        },
        submenus: []
      }
    ]
  },
  {
    section: {
      id: 'seccion-configuracion',
      name: 'Configuración'
    },
    menus: [
      {
        menu: {
          id: 'menu-cuentas',
          name: 'Cuentas',
          url: `${BASE_PATH}/accounts`,
          icon: Settings
        },
        submenus: []
      }
    ]
  }
]
