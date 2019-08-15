import React, { SVGProps } from 'react'

const SvgFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 24v-3H8v-1h3v-8H8v-1h3V8h1v3h8V8h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3h-1zm9-4v-8h-8v8h8z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgFrame
