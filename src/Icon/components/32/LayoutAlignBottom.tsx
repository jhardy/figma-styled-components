import React, { SVGProps } from 'react'

const SvgLayoutAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.5 10v10h-2V10h2zm8 12v1h-13v-1h13zm-3-2v-6h-2v6h2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayoutAlignBottom
