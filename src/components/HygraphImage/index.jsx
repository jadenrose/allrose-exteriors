import React from 'react'
import Image from 'next/image'

const HygraphImage = ({ url, alt, width, height, ...rest }) => {
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
