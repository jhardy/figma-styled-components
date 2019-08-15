import React, { SVGProps } from 'react'

const SvgLayoutAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 22.5h1v-13h-1v13zm-12-8h10v-2H10v2zm10 5h-6v-2h6v2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayoutAlignRight
