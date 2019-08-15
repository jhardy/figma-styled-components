import React, { SVGProps } from 'react'

const SvgTidyUpGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 10h2v2h-2v-2zm10 0h2v2h-2v-2zm-8 5h-2v2h2v-2zm8 0h2v2h-2v-2zm-8 5h-2v2h2v-2zm8 0h2v2h-2v-2zm-3-10h-2v2h2v-2zm-2 5h2v2h-2v-2zm2 5h-2v2h2v-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTidyUpGrid
