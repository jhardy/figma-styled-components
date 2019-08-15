import React, { SVGProps } from 'react'

const SvgStrokeWeight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 10h12v1H10v-1zm0 4h12v2H10v-2zm12 5H10v3h12v-3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgStrokeWeight
