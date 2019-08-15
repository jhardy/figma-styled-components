import React, { SVGProps } from 'react'

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 6l10 18H6L16 6zm-1 11v-4h2v4h-2zm0 2v2h2v-2h-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgWarning
