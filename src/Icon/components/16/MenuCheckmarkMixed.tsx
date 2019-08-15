import React, { SVGProps } from 'react'

const SvgMenuCheckmarkMixed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 9H4V7h8v2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgMenuCheckmarkMixed
