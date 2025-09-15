import type { ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface StatsCardProps {
  title: string
  value: string | number
  subtitle: string
  icon?: ReactNode
  className?: string
}

export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  className = ''
}: StatsCardProps) {
  return (
    <Card className={`p-6 ${className}`}>
      <CardContent className="p-0">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {icon && <div className="text-gray-600">{icon}</div>}
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold text-gray-900">{value}</div>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  )
}
