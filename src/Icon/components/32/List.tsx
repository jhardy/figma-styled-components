import React, { SVGProps } from 'react'

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 10H9v1h14v-1zM9 15.5h14v1H9v-1zM9 21h14v1H9v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgList
