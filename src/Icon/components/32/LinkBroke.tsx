import React, { SVGProps } from 'react'

const SvgLinkBroke = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18 14v-2a2 2 0 10-4 0v2h-1v-2a3 3 0 116 0v2h-1zm1 4h-1v2a2 2 0 11-4 0v-2h-1v2a3 3 0 106 0v-2z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLinkBroke
