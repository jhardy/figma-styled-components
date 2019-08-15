import React, { SVGProps } from 'react'

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.5 16.5h-11v-1h11v1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgMinus
