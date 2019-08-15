import React, { SVGProps } from 'react'

const SvgLayerComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.743 4.748L8 2.5l2.257 2.248L8 6.996 5.743 4.748zm-.995 5.51L2.5 8l2.248-2.257L6.996 8l-2.248 2.257zm5.51.994L8 13.5l-2.257-2.248L8 9.004l2.257 2.248zM13.5 8l-2.248-2.257L9.004 8l2.248 2.257L13.5 8z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayerComponent
