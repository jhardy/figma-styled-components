import React, { SVGProps } from 'react'

const SvgTextResizeWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.707 8l-.353.354-3 3-.708-.707L11.793 8.5H2v-1h9.793L9.646 5.354l.708-.708 3 3 .353.354z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextResizeWidth
