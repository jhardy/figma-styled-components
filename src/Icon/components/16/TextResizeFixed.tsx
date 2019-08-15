import React, { SVGProps } from 'react'

const SvgTextResizeFixed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 3H3v10h10V3zM3 2H2v12h12V2H3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextResizeFixed
