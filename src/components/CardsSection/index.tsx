import { CardsSection } from '@/__generated__/graphql'
import React from 'react'
import Button from '@/components/Button'
import styles from './index.module.scss'
import Container from '../Container'
import Link from 'next/link'

const CardsSection = ({
  title,
  description,
  cards,
  miniCards,
}: CardsSection) => {
  return (
    <section className={styles.cardsSection}>
      <Container>
        <div className={styles.content}>
          {title || description || miniCards.length ? (
            <div
              className={`${styles.text} ${
                miniCards.length && styles.withCards
              }`}
            >
              <h2>{title}</h2>
              <p>{description}</p>
              <div className={styles.miniCards}>
                {miniCards.map(({ id, title, link }) => (
                  <Link key={id} href={link || ''} className={styles.miniCard}>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          {cards?.map(({ id, title, description, button }) => (
            <Link
              href={button?.link || ''}
              key={id}
              className={styles.fancyCard}
            >
              <div className={styles.fancyCardTop}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              {button && <Button {...button} link={undefined} />}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CardsSection
