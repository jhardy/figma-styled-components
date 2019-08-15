import React, { SVGProps } from 'react'

const SvgCorners = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 11h3v1h-2v2h-1v-3zm7 0h3v3h-1v-2h-2v-1zm-6 9v-2h-1v3h3v-1h-2zm9-2v3h-3v-1h2v-2h1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgCorners
