import React, { SVGProps } from 'react'

const SvgAdjust = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 16.05V9h1v7.05a2.5 2.5 0 010 4.9V23h-1v-2.05a2.5 2.5 0 010-4.9zm2 2.45a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 4.5h1v-7.05a2.5 2.5 0 000-4.9V9h-1v2.05a2.5 2.5 0 000 4.9V23zm2-9.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAdjust
