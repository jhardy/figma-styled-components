import React, { SVGProps } from 'react'

const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15 9.5a1 1 0 00-1 1h4a1 1 0 00-1-1h-2zm4 1a2 2 0 00-2-2h-2a2 2 0 00-2 2h-3v1h1v10a2 2 0 002 2h6a2 2 0 002-2v-10h1v-1h-3zm1 1h-8v10a1 1 0 001 1h6a1 1 0 001-1v-10zm-6 7v-4h1v4h-1zm3 0v-4h1v4h-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTrash
