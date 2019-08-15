import React, { SVGProps } from 'react'

const SvgTextDecorationUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.5 8.5V3h-1v5.5a3.5 3.5 0 107 0V3h-1v5.5a2.5 2.5 0 01-5 0zM2 14v1h12v-1H2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextDecorationUnderline
