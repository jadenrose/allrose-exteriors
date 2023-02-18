import { Asset } from '@/__generated__/graphql'
import React from 'react'
import Image, { ImageProps } from 'next/image'

const HygraphImage = ({
  url,
  alt,
  width,
  height,
  ...rest
}: Asset & { priority?: boolean }) => {
  return (
    <Image
      {...rest}
      src={url}
      alt={alt || ''}
      width={width || 0}
      height={height || 0}
    />
  )
}

export default HygraphImage
