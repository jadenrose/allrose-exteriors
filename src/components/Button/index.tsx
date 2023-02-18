import { Button } from '@/__generated__/graphql'
import Link from 'next/link'
import React from 'react'
import HygraphImage from '../HygraphImage'
import styles from './index.module.scss'

type ButtonProps = {
  appearance?: 'text' | 'primary'
}

const Button = ({
  label,
  prefix,
  suffix,
  link,
  appearance = 'text',
}: Button & ButtonProps) => {
  const inner = (
    <>
      {prefix && <HygraphImage {...prefix} />}
      {label}
      {suffix && <HygraphImage {...suffix} />}
    </>
  )

  const className = `${styles.button} ${appearance && styles[appearance]}`

  if (link)
    return (
      <Link href={link} className={className}>
        {inner}
      </Link>
    )

  return <button className={className}>{inner}</button>
}

export default Button
