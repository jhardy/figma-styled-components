import React, { SVGProps } from 'react'

const SvgScrollingFrameHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 4H3V3h10v1h-1zm0 8h1v1H3v-1h9zm.354-4.354l-2-2-.708.708L10.793 7.5H5.207l1.147-1.146-.708-.708-2 2L3.293 8l.353.354 2 2 .708-.708L5.207 8.5h5.586L9.646 9.646l.708.708 2-2L12.707 8l-.353-.354z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgScrollingFrameHorizontal
