import React, { SVGProps } from 'react'

const SvgMask = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.86 3.646a4.5 4.5 0 110 8.709A5.49 5.49 0 009 8a5.49 5.49 0 00-2.14-4.354zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgMask
