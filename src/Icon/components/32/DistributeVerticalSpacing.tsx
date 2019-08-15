import React, { SVGProps } from 'react'

const SvgDistributeVerticalSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.5 10h13v1h-13v-1zm3 5h7v2h-7v-2zm10 6h-13v1h13v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgDistributeVerticalSpacing
