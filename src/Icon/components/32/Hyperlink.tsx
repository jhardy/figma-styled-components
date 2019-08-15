import React, { SVGProps } from 'react'

const SvgHyperlink = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.5 18a4.502 4.502 0 004.244-3h1.049a5.5 5.5 0 110-3h-1.05A4.502 4.502 0 009 13.5a4.5 4.5 0 004.5 4.5zm5 5a4.5 4.5 0 10-4.244-6h-1.049a5.5 5.5 0 110 3h1.05a4.502 4.502 0 004.243 3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgHyperlink
