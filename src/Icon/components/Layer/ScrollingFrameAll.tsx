import React, { SVGProps } from 'react'

const SvgScrollingFrameAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.354 2.646L8 2.293l-.354.353-2 2 .708.708L7.5 4.207V7.5H4.207l1.147-1.146-.708-.708-2 2L2.293 8l.353.354 2 2 .708-.708L4.207 8.5H7.5v3.293l-1.146-1.147-.708.707 2 2 .354.354.354-.354 2-2-.708-.707L8.5 11.793V8.5h3.293l-1.146 1.146.707.707 2-2L13.707 8l-.353-.354-2-2-.707.708L11.793 7.5H8.5V4.207l1.146 1.147.708-.708-2-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgScrollingFrameAll
