import React, { SVGProps } from 'react'

const SvgMenuCheckmarkOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.207 5.207l-5.5 5.5-.707.707-.707-.707-3-3 1.414-1.414L7 8.586l4.793-4.793 1.414 1.414z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgMenuCheckmarkOn
