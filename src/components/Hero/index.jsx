import React from 'react'
import Button from '../Button'
import Container from '../Container'
import HygraphImage from '../HygraphImage'
import styles from './index.module.scss'
import parse from 'html-react-parser'

const Hero = ({
  title,
  subtitle,
  body,
  button,
  backgroundImage,
  heroStyle = 'secondary',
}) => {
  return (
    <section className={`${styles.hero} ${styles[heroStyle]}`}>
      <div className={styles.overlay}>
        <Container>
          <div className={styles.content}>
            {title && <h1 className={styles.title}>{parse(title)}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {body?.html && parse(body.html)}
            {button && <Button {...button} appearance="primary" />}
          </div>
        </Container>
      </div>
      {backgroundImage && (
        <div className={styles.bgImageWrapper}>
          <HygraphImage {...backgroundImage} />
        </div>
      )}
    </section>
  )
}

export default Hero
