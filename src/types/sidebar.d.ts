export interface SectionElement {
  section: SectionSection
  menus: MenuElement[]
}

export interface MenuElement {
  menu: SubmenuElement
  submenus: SubmenuElement[]
}

export interface SubmenuElement {
  id: number
  name: string
  description: string
  icon: null | string
  url: null | string
}

export interface SectionSection {
  id: number
  name: string
}

export interface UserNavbar {
  username: string
  email: string
  photo: string | null
}

export interface MenuProfileProps {
  profileData: ProfileData
  menuSections?: MenuSection[]
  progressValue?: number
  showProgress?: boolean
  showBorders?: boolean
  avatarClassName?: string
  contentClassName?: string
}

export interface MenuItem {
  label: string
  href?: string
  onClick?: () => void | Promise<void>
}

export interface MenuSection {
  label?: string
  items: MenuItem[]
}
