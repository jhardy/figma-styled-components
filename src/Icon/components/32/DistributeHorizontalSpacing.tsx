import React, { SVGProps } from 'react'

const SvgDistributeHorizontalSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11 22.5v-13h-1v13h1zm11-13v13h-1v-13h1zm-5 3v7h-2v-7h2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgDistributeHorizontalSpacing
