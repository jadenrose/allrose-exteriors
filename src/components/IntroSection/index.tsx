import { BasicContent } from '@/__generated__/graphql'
import React, { useMemo } from 'react'
import Container from '@/components/Container'
import styles from './index.module.scss'
import parse from 'html-react-parser'

const IntroSection = ({ title, body }: BasicContent) => {
  const parsed = useMemo(() => {
    if (body?.html) return parse(body.html)
  }, [body?.html])

  return (
    <section className={styles.introSection}>
      <Container>
        <div className={styles.content}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {body && parsed}
        </div>
      </Container>
    </section>
  )
}

export default IntroSection
