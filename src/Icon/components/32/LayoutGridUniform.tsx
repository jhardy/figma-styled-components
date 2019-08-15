import React, { SVGProps } from 'react'

const SvgLayoutGridUniform = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <g fill='currentColor' fillOpacity={0.8}>
      <path d='M9 9h3v3H9zM20 9h3v3h-3zM14.5 9h3v3h-3zM9 14.5h3v3H9zM20 14.5h3v3h-3zM14.5 14.5h3v3h-3zM9 20h3v3H9zM20 20h3v3h-3zM14.5 20h3v3h-3z' />
    </g>
  </svg>
)

export default SvgLayoutGridUniform
