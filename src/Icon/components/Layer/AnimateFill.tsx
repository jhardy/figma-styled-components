import React, { SVGProps } from 'react'

const SvgAnimateFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 3h10v10H3V3zM2 3a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm8.5 5L6 5.5v5L10.5 8z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAnimateFill
