import React, { SVGProps } from 'react'

const SvgAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 12v8h8v-1h-3a4 4 0 00-4-4v-3h-1zm1 4v3h3a3 3 0 00-3-3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAngle
