'use client'
import { SidebarToggle } from './sidebar-toggle'
import { useStore } from 'zustand'
import { useSidebar } from '@/hooks'
import { SheetMenu } from './sheet-menu'
import { configApps } from '@/config/configApp'
import { cn } from '@/lib/utils'
import { LogoRender } from '../miscellaneous/logo-render'
import { ADMIN_URLS_APP } from '@/config/configUrl'
import { MenuSection, UserNavbar } from '@/types/sidebar'
import { ProfilePopover } from './profile-popover'
// import { ModeToggle } from './mode-toggle'

interface NavBarCustomProps {
  app?: keyof typeof configApps
  userData: UserNavbar | null
  menuSections?: MenuSection[]
}

export const NavBar = (props: NavBarCustomProps) => {
  const { app, userData, menuSections } = props

  const sidebar = useStore(useSidebar, (x) => x)
  if (!sidebar) return null
  const { isOpen, toggleOpen } = sidebar

  const appConfig = app ? configApps[app] : configApps['panel-admin']

  const nameApp = appConfig.name

  return (
    <header
      className={cn(
        `sticky top-0 z-50 w-full  shadow bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700`
      )}
    >
      <div className="px-4 sm:px-6 md:px-7 flex h-16 items-center">
        <div className="flex items-center space-x-4 lg:space-x-0 sm:gap-3">
          <SheetMenu title={nameApp} />
          <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
          <LogoRender
            href={ADMIN_URLS_APP.HOME.URL_BASE}
            className="w-full max-w-36"
          />
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          {/* <ModeToggle /> */}
          {/*Menu de perfil*/}
          {userData && (
            <ProfilePopover
              profileData={userData}
              menuSections={menuSections}
            />
          )}
        </div>
      </div>
    </header>
  )
}
