import { useViewport } from '@/context/ViewportContext'
import { Button as ButtonType } from '@/__generated__/graphql'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Button from '@/components/Button'

const links = [
  { id: 0, href: '/', label: 'home' },
  { id: 1, href: '/about', label: 'about us' },
  { id: 2, href: '/services/siding', label: 'services' },
  { id: 3, href: '/products', label: 'products' },
  { id: 4, href: '/partners', label: 'partners' },
  { id: 5, href: '/gallery', label: 'projects gallery' },
  { id: 6, href: '/contact', label: 'contact us' },
]

const Nav = ({ cto }: { cto?: ButtonType }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useRouter()
  const { text: viewport } = useViewport()

  const handleOpenMobileMenu = () => setMobileMenuOpen(true)
  const handleCloseMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [mobileMenuOpen])

  return (
    <nav className={`${styles.nav} ${styles[viewport]}`}>
      <div className={`${styles.navlist} ${mobileMenuOpen ? styles.open : ''}`}>
        {links.map(({ id, href, label }) => (
          <Link
            key={id}
            className={`${styles.navlink} ${
              pathname === href ? styles.active : ''
            }`}
            href={href}
          >
            {label}
          </Link>
        ))}
        {viewport === 'mobile' && (
          <svg
            className={styles.close}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            onClick={handleCloseMobileMenu}
          >
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        )}
      </div>
      {cto && (
        <div className={styles.telephone}>
          <Button
            {...cto}
            label={viewport === 'desktop' ? cto.label : undefined}
          />
        </div>
      )}
      {viewport === 'mobile' && (
        <svg
          className={styles.hamburger}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          onClick={handleOpenMobileMenu}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      )}
    </nav>
  )
}

export default Nav
