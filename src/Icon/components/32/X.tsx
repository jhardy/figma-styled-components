import React, { SVGProps } from 'react'

const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 15.293l4.646-4.646.708.707L16.707 16l4.647 4.647-.707.707L16 16.707l-4.646 4.647-.707-.707L15.293 16l-4.646-4.646.707-.707L16 15.293z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgX
