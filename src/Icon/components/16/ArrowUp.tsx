import React, { SVGProps } from 'react'

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 2.293l-.354.353-3 3 .708.708L7.5 4.207V12.5h1V4.207l2.146 2.147.707-.708-3-3L8 2.293z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowUp
