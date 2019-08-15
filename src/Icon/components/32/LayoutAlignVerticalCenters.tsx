import React, { SVGProps } from 'react'

const SvgLayoutAlignVerticalCenters = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5 15.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1h3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLayoutAlignVerticalCenters
