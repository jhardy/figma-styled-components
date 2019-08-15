import React, { SVGProps } from 'react'

const SvgGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 3H7v1h2V3zm2.5 9h.5v-.5h1V13h-1.5v-1zM4 7v2H3V7h1zm8-2.5V4h-.5V3H13v1.5h-1zM12 7v2h1V7h-1zM4 4.5V4h.5V3H3v1.5h1zM3 12v-.5h1v.5h.5v1H3v-1zm6 0H7v1h2v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgGroup
