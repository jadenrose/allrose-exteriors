import { WhatWeDo } from '@/__generated__/graphql'
import React from 'react'
import Container from '../Container'
import HygraphImage from '../HygraphImage'
import styles from './index.module.scss'
import parse from 'html-react-parser'

const WhatWeDo = ({ title, description, items }: WhatWeDo) => {
  return (
    <section className={styles.whatWeDo}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.items}>
            {items.map(({ id, image, description: itemDescription }) => (
              <div key={id} className={styles.item}>
                {image && <HygraphImage {...image} />}
                <p>{itemDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhatWeDo
