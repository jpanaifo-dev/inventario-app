'use client'

import { Button } from '@/components/ui/button'

interface BannerSectionProps {
  title?: string
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function BannerSection({
  title = 'Name section title',
  description = 'Description section, detailing the purpose and content of this section.',
  buttonText = 'Action',
  onButtonClick
}: BannerSectionProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
      <div className="ml-6">
        <Button
          onClick={onButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
