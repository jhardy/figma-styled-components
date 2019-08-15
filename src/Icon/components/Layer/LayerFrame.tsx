import React, { SVGProps } from 'react'

const SvgLayerFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 2.5V5h4V2.5h1V5h2.5v1H11v4h2.5v1H11v2.5h-1V11H6v2.5H5V11H2.5v-1H5V6H2.5V5H5V2.5h1zm4 7.5V6H6v4h4z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayerFrame
