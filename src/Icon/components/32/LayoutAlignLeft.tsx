import React, { SVGProps } from 'react'

const SvgLayoutAlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 22.5H9v-13h1v13zm12-8H12v-2h10v2zm-10 5h6v-2h-6v2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayoutAlignLeft
