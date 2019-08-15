import React, { SVGProps } from 'react'

const SvgLayoutGridColumns = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <g fill='currentColor' fillOpacity={0.8}>
      <path d='M9 9h3v14H9zM14.5 9h3v14h-3zM20 9h3v14h-3z' />
    </g>
  </svg>
)

export default SvgLayoutGridColumns
