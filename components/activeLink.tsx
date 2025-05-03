import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode // Content of the link
  activeClassName: string // Class to add when active
  className?: string // Optional base class for the link
}

const ActiveLink: React.FC<PropsWithChildren<ActiveLinkProps>> = ({
  children,
  activeClassName,
  className = '',
  href,
  ...props // remaining LinkProps (target, rel, etc.)
}) => {
  const { asPath } = useRouter()

  // Ensure href is a string for comparison (LinkProps['href'] can be an object)
  const hrefString = typeof href === 'string' ? href : href.pathname || ''

  // Simplified check: exact match OR startsWith (if hrefString is not '/')
  const isActive =
    hrefString === '/' ? asPath === hrefString : asPath.startsWith(hrefString)

  // Combine the base className with the activeClassName if the link is active
  const combinedClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className

  return (
    <Link
      href={href}
      className={combinedClassName || undefined} // Pass undefined if empty to avoid empty class attribute
      {...props}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
