import React, { SVGProps } from 'react'

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.5 13.5V15h-3v-1.5a1.5 1.5 0 013 0zm-4 1.5v-1.5a2.5 2.5 0 015 0V15h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-6a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h.5z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLock
