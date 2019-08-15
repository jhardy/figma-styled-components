import React, { SVGProps } from 'react'

const SvgArrowUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 10.292l.354.354 2.5 2.5-.707.707-1.646-1.646v7.585l1.646-1.646.707.707-2.5 2.5-.354.354-.353-.354-2.5-2.5.707-.707 1.647 1.646v-7.585l-1.647 1.646-.707-.707 2.5-2.5.353-.354z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowUpDown
