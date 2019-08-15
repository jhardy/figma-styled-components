import React, { SVGProps } from 'react'

const SvgTextAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 3h14v1H1V3zm3 4h8v1H4V7zm9 4H3v1h10v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextAlignCenter
