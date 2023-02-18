import { Footer } from '@/__generated__/graphql'
import React from 'react'
import Container from '../Container'
import HygraphImage from '../HygraphImage'
import styles from './index.module.scss'
import parse from 'html-react-parser'

const Footer = ({ logo, contactInfo, businessHours, serviceArea }: Footer) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          {logo && (
            <div className={styles.logo}>
              <HygraphImage {...logo} />
            </div>
          )}
          <div className={styles.contactAndHours}>
            <div className={styles.contactInfo}>
              <h4>{contactInfo?.title}</h4>
              {contactInfo?.body?.html && parse(contactInfo.body.html)}
            </div>
            <div className={styles.businessHours}>
              <h4>{businessHours?.title}</h4>
              {businessHours?.body?.html && parse(businessHours.body.html)}
            </div>
          </div>
          <div className={styles.serviceArea}>
            <h4>{serviceArea?.title}</h4>
            {serviceArea?.body?.html && parse(serviceArea.body.html)}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
