import React, { SVGProps } from 'react'

const SvgDraft = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 8.5h7.707l.147.146 4 4 .146.147V23.5H10v-15zm1 1v13h10v-9h-4v-4h-6zm7 .707l2.293 2.293H18v-2.293z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgDraft
