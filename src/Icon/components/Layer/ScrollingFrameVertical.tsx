import React, { SVGProps } from 'react'

const SvgScrollingFrameVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4 4v9H3V3h1v1zm8 9h1V3h-1v10zM8.354 3.646L8 3.293l-.354.353-2 2 .708.708L7.5 5.207v5.586L6.354 9.646l-.708.708 2 2 .354.353.354-.353 2-2-.708-.708L8.5 10.793V5.207l1.146 1.147.708-.708-2-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgScrollingFrameVertical
