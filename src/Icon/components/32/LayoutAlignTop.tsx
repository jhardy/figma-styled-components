import React, { SVGProps } from 'react'

const SvgLayoutAlignTop = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.5 22V12h-2v10h2zm8-12V9h-13v1h13zm-3 2v6h-2v-6h2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayoutAlignTop
