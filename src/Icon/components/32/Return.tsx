import React, { SVGProps } from 'react'

const SvgReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.707 14l2.647 2.646-.707.707-3.5-3.5-.354-.353.354-.354 3.5-3.5.707.707L11.707 13H15.5c3.576 0 6.5 2.924 6.5 6.5V21h-1v-1.5c0-3.024-2.476-5.5-5.5-5.5h-3.793z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgReturn
