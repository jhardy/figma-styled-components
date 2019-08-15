import React, { SVGProps } from 'react'

const SvgTextAlignAdjusted = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 3h14v1H1V3zm0 4h14v1H1V7zm14 4H1v1h14v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextAlignAdjusted
