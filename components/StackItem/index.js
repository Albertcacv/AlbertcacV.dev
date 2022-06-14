import Image from 'next/image'
import React from 'react'

export const StackItem = ({ src, alt, width, height, className }) => {
  return (
    <article>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </article>
  )
}
