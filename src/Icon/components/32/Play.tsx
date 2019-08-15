import React, { SVGProps } from 'react'

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 10.098l.765.478 8 5 .678.424-.678.424-8 5-.765.478V10.098zm1 1.804v8.196L20.557 16 14 11.902z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgPlay
