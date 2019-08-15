import React, { SVGProps } from 'react'

const SvgSearchLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 15a5 5 0 11-10 0 5 5 0 0110 0zm-1.126 4.581a6 6 0 11.707-.707l4.273 4.272-.708.708-4.272-4.273z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgSearchLarge
