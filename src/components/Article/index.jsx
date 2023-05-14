import React from 'react'
import styles from './index.module.scss'
import parse from 'html-react-parser'
import Button from '../Button'
import HygraphImage from '../HygraphImage'
import Container from '../Container'

const Article = ({ title, body, button, image }) => {
  return (
    <article className={styles.article}>
      <Container>
        <div className={styles.content}>
          <h2>{title}</h2>
          {body?.html && parse(body.html)}
          {button && <Button {...button} appearance="primary" />}
        </div>
      </Container>
      {image && <HygraphImage {...image} />}
    </article>
  )
}

export default Article
