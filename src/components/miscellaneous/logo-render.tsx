import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const LogoRender = ({
  nameApp,
  subtitle,
  href,
  urlLink,
  className
}: {
  nameApp?: string
  subtitle?: string
  href: string
  urlLink?: string
  className?: string
}) => {
  return (
    <section
      id="logo"
      className={cn(
        'flex items-center gap-2 w-fit hover:cursor-pointer',
        className
      )}
    >
      <Link
        href={href}
        className="flex items-center gap-2 w-fit hover:cursor-pointer"
      >
        {!nameApp && (
          <Image
            src={urlLink || '/logo-UNAP-color.webp'}
            alt="logo-epg"
            className="h-11 w-auto"
            width={1820}
            height={1420}
          />
        )}
        {nameApp && (
          <h1 className={cn(' font-semibold text-xs text-white', className)}>
            {nameApp || 'ESCUELA DE POSTGRADO UNAP'}
          </h1>
        )}
        {subtitle && (
          <h2 className="w-32 min-w-32 font-semibold text-xs text-white">
            {subtitle}
          </h2>
        )}
      </Link>
    </section>
  )
}
