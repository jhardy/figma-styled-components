import React, { SVGProps } from 'react'

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.707 8l-.353-.354-3-3-.708.708L10.793 7.5H2.5v1h8.293l-2.147 2.146.708.708 3-3L12.707 8z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgArrowRight
