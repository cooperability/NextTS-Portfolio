import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState } from 'react'
import styles from '../styles/utils.module.css'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode // Content of the link
  activeClassName: string
  className?: string
}

const ActiveLink: React.FC<PropsWithChildren<ActiveLinkProps>> = ({
  children,
  activeClassName,
  className = '',
  href,
  ...props // (target, rel, etc.)
}) => {
  const { asPath } = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  // Ensure href is a string for comparison (LinkProps['href'] can be an object)
  const hrefString = typeof href === 'string' ? href : href.pathname || ''

  // Simplified check: exact match OR startsWith (if hrefString is not '/')
  const isActive =
    hrefString === '/' ? asPath === hrefString : asPath.startsWith(hrefString)

  // Combine the base className with the activeClassName if the link is active
  const combinedClassName = isActive
    ? `${className} ${activeClassName} ${styles.animatedLink}`.trim()
    : `${className} ${styles.animatedLink}`.trim()

  // Dynamic class for animated underline based on hover state
  const underlineClassName = isHovered
    ? `${styles.animatedUnderline} ${styles.animatedUnderlineHover}`
    : styles.animatedUnderline

  return (
    <Link
      href={href}
      className={combinedClassName || undefined} // Pass undefined if empty to avoid empty class attribute
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className={styles.linkTextWrapper}>
        {children}
        {/* Show animated underline only when hovering and not active */}
        {!isActive && <div className={underlineClassName} />}
        {/* Show static underline when active */}
        {isActive && <div className={styles.staticUnderline} />}
      </span>
    </Link>
  )
}

export default ActiveLink
