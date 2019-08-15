import React, { SVGProps } from 'react'

const SvgLayoutGridRows = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <g fill='currentColor' fillOpacity={0.8}>
      <path d='M9 9h14v3H9zM9 14.5h14v3H9zM9 20h14v3H9z' />
    </g>
  </svg>
)

export default SvgLayoutGridRows
