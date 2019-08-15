import React, { SVGProps } from 'react'

const SvgCornerRadius = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 13h-4a4 4 0 00-4 4v4h-1v-4a5 5 0 015-5h4v1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgCornerRadius
