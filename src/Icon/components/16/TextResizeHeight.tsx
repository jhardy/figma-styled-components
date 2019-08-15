import React, { SVGProps } from 'react'

const SvgTextResizeHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 3.5h14v1H1v-1zm0 4h14v1H1v-1zm9 4H1v1h9v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextResizeHeight
