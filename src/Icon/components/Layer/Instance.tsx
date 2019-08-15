import React, { SVGProps } from 'react'

const SvgInstance = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.828 8l.336-.336 5.5-5.5L8 1.828l.336.336 5.5 5.5.336.336-.336.336-5.5 5.5-.336.336-.336-.336-5.5-5.5L1.828 8zM8 12.828L12.828 8 8 3.172 3.172 8 8 12.828z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgInstance
