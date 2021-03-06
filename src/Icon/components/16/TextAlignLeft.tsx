import React, { SVGProps } from 'react'

const SvgTextAlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 3h14v1H1V3zm0 4h8v1H1V7zm10 4H1v1h10v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextAlignLeft
