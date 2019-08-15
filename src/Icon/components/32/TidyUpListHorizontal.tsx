import React, { SVGProps } from 'react'

const SvgTidyUpListHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 22.5v-13h2v13h-2zm5 0v-13h2v13h-2zm5-13v13h2v-13h-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTidyUpListHorizontal
