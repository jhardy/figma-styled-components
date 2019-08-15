import React, { SVGProps } from 'react'

const SvgArrowLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.207 16.5l1.647 1.646-.707.707-2.5-2.5-.354-.353.354-.354 2.5-2.5.707.707-1.647 1.647h7.586l-1.646-1.646.707-.708 2.5 2.5.353.354-.353.354-2.5 2.5-.707-.708 1.646-1.646h-7.586z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowLeftRight
