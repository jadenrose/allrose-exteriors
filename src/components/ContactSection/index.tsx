import React from 'react'
import { ContactSection } from '@/__generated__/graphql'
import styles from './index.module.scss'
import Container from '../Container'
import HygraphImage from '../HygraphImage'
import parse from 'html-react-parser'
import Link from 'next/link'

const ContactSection = ({ title, items, footer }: ContactSection) => {
  return (
    <section className={styles.contactSection}>
      <Container>
        <h2>{title}</h2>
        <div className={styles.contactInformation}>
          {items.map(({ id, image, body, link }) => (
            <Link key={id} href={link || ''} className={styles.contactItem}>
              {image && <HygraphImage {...image} />}
              <div>{body?.html && parse(body.html)}</div>
            </Link>
          ))}
        </div>
        <h3>{footer && parse(footer)}</h3>
      </Container>
    </section>
  )
}

export default ContactSection
