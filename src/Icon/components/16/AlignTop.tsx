import React, { SVGProps } from 'react'

const SvgAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 1H1v1h14V1zM8.354 3.646L8 3.293l-.354.353-3 3 .708.708L7.5 5.207V13h1V5.207l2.146 2.147.708-.708-3-3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAlignTop
