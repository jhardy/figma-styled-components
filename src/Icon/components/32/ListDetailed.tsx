import React, { SVGProps } from 'react'

const SvgListDetailed = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 10h-2v1h2v-1zm0 10h-2v1h2v-1zm-2-5h2v1h-2v-1zm12-5h-8v1h8v-1zm-8 10h8v1h-8v-1zm8-5h-8v1h8v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgListDetailed
