import React, { SVGProps } from 'react'

const SvgAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.354 12.354L8 12.707l-.354-.353-3-3 .708-.708L7.5 10.793V3h1v7.793l2.146-2.147.708.708-3 3zM15 14v1H1v-1h14z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAlignBottom
