import React from 'react'
import HygraphImage from '../HygraphImage'
import Link from 'next/link'
import Nav from '@/components/Nav'
import styles from './index.module.scss'
import Container from '../Container'

const Header = ({ cto, logo }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          {logo && (
            <Link href="/" className={styles.logo}>
              <HygraphImage {...logo} priority />
            </Link>
          )}
          <Nav cto={cto || undefined} />
        </div>
      </Container>
    </header>
  )
}

export default Header
