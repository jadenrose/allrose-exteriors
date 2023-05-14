import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import HygraphImage from '../HygraphImage'
import styles from './index.module.scss'

const BrandingSection = ({ cards }) => {
  return (
    <section className={styles.brandingSection}>
      <Container>
        <div className={styles.brandingCards}>
          {cards.map(({ id, image, link, subtitle }) => (
            <div key={id} className={styles.brandingItem}>
              <Link
                href={link || ''}
                target="_blank"
                className={styles.brandingCard}
              >
                {image && <HygraphImage {...image} />}
              </Link>
              {subtitle && (
                <Link
                  href={link || ''}
                  className={styles.subtitle}
                  target="_blank"
                >
                  {subtitle}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BrandingSection
