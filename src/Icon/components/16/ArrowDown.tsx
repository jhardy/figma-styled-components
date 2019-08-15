import React, { SVGProps } from 'react'

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 12.707l-.354-.353-3-3 .708-.708L7.5 10.793V2.5h1v8.293l2.146-2.147.707.708-3 3-.353.353z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowDown
