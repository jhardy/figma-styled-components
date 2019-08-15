import React, { SVGProps } from 'react'

const SvgResolve = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 16a7 7 0 11-14 0 7 7 0 0114 0zm1 0a8 8 0 11-16 0 8 8 0 0116 0zm-8.089 2.865l4-4.5-.822-.73-3.613 4.063-2.587-2.587-.778.778 3 3 .413.412.387-.436z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgResolve
