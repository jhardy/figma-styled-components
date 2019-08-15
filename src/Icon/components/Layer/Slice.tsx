import React, { SVGProps } from 'react'

const SvgSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3H6v1h4V3zM4 4V3H3v1h1zM3 6h1v4H3V6zm9 0h1v4h-1V6zm1-2h-1V3h1v1zm-7 8h4v1H6v-1zm-2 0H3v1h1v-1zm8 1v-1h1v1h-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgSlice
