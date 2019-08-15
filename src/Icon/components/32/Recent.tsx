import React, { SVGProps } from 'react'

const SvgRecent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 16a7 7 0 11-14 0 7 7 0 0114 0zm1 0a8 8 0 11-16 0 8 8 0 0116 0zm-9-4v5h5v-1h-4v-4h-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgRecent
