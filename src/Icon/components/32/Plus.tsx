import React, { SVGProps } from 'react'

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1h5z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgPlus
