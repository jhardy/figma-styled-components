import React, { SVGProps } from 'react'

const SvgImageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 3H3v6.293l2.146-2.147.354-.353.354.353L11.707 13H13V3zM3 13v-2.293l2.5-2.5L10.293 13H3zM3 2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1H3zm8 4a1 1 0 11-2 0 1 1 0 012 0zm1 0a2 2 0 11-4 0 2 2 0 014 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgImageFill
