import React, { SVGProps } from 'react'

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.293 8l.353-.354 3-3 .708.708L4.207 7.5H12.5v1H4.207l2.147 2.146-.708.708-3-3L2.293 8z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowLeft
