import React, { SVGProps } from 'react'

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5 13a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM20 9.5a3.5 3.5 0 00-1.383 6.716A4.513 4.513 0 0016 18.436a4.513 4.513 0 00-2.617-2.22 3.501 3.501 0 10-2.765 0A4.502 4.502 0 007.5 20.5V22h17v-1.5c0-2.003-1.309-3.7-3.117-4.284A3.501 3.501 0 0020 9.5zM16.5 21v-.5a3.5 3.5 0 117 0v.5h-7zm-1-.5v.5h-7v-.5a3.5 3.5 0 117 0zm-6-7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgShare
