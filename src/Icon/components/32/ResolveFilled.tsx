import React, { SVGProps } from 'react'

const SvgResolveFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 24a8 8 0 100-16 8 8 0 000 16zm-.089-5.135l4-4.5-.822-.73-3.613 4.063-2.587-2.587-.778.778 3 3 .413.412.387-.436z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgResolveFilled
