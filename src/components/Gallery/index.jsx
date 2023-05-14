import React from 'react'
import Container from '../Container'
import styles from './index.module.scss'
import parse from 'html-react-parser'
import HygraphImage from '../HygraphImage'

const Gallery = ({ title, items }) => {
  return (
    <section className={styles.gallery}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        {items.map(({ id, title, body, image }) => (
          <article key={id} className={styles.galleryItem}>
            <div className={styles.text}>
              <h3>{title}</h3>
              {body?.html && parse(body.html)}
            </div>
            {image && <HygraphImage {...image} />}
          </article>
        ))}
      </Container>
    </section>
  )
}

export default Gallery
