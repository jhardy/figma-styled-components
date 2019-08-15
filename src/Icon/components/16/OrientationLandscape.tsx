import React, { SVGProps } from 'react'

const SvgOrientationLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 5v6h12V5H2zm-1 6v1h14V4H1v7z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgOrientationLandscape
