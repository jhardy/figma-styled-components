import React, { SVGProps } from 'react'

const SvgType = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 3h10v3h-1V4H8.5v8H10v1H6v-1h1.5V4H4v2H3V3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgType
