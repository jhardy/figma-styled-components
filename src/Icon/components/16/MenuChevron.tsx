import React, { SVGProps } from 'react'

const SvgMenuChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path d='M11 8L5 4v8l6-4z' fill='currentColor' fillOpacity={0.8} />
  </svg>
)

export default SvgMenuChevron
