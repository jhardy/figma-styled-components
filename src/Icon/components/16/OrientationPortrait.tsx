import React, { SVGProps } from 'react'

const SvgOrientationPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 2H5v12h6V2zM5 1H4v14h8V1H5z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgOrientationPortrait
