import { BannerSection } from '@/components/miscellaneous'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <div className="flex flex-col gap-4">
      <BannerSection title="Gestión de Pecosas" />
      {children}
    </div>
  )
}
