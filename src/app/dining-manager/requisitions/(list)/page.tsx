import { StatsCard } from '@/components/miscellaneous/stats-card'

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="PECOSAs realizadas"
          subtitle="Total de PECOSAs en el sistema"
          value={2}
        />
        <StatsCard
          title="Pendientes"
          subtitle="Total de PECOSAs en el sistema"
          value={32}
        />
        <StatsCard
          title="Inconformidades"
          subtitle="Total de PECOSAs en el sistema"
          value={44}
        />
        <StatsCard
          title="Completadas"
          subtitle="Total de PECOSAs en el sistema"
          value={19}
        />
      </div>
    </div>
  )
}
