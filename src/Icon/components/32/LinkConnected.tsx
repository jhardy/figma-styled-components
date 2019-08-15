import React, { SVGProps } from 'react'

const SvgLinkConnected = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 10a2 2 0 012 2v2h1v-2a3 3 0 10-6 0v2h1v-2a2 2 0 012-2zm2 8h1v2a3 3 0 11-6 0v-2h1v2a2 2 0 104 0v-2zm-2.5-5v6h1v-6h-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLinkConnected
