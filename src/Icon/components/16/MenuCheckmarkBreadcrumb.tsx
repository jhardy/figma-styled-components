import React, { SVGProps } from 'react'

const SvgMenuCheckmarkBreadcrumb = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      d='M10 8a2 2 0 11-4 0 2 2 0 014 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgMenuCheckmarkBreadcrumb
