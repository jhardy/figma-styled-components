import React, { SVGProps } from 'react'

const SvgCaretUp = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path d='M8 6l3 4H5l3-4z' fill='currentColor' fillOpacity={0.8} />
  </svg>
)

export default SvgCaretUp
