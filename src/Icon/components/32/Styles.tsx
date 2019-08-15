import React, { SVGProps } from 'react'

const SvgStyles = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.5 13a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm6 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM11.5 19a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgStyles
