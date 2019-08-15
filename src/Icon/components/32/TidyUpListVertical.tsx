import React, { SVGProps } from 'react'

const SvgTidyUpListVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.5 10h13v2h-13v-2zm0 5h13v2h-13v-2zm13 5h-13v2h13v-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTidyUpListVertical
