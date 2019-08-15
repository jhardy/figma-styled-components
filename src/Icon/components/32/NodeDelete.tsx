import React, { SVGProps } from 'react'

const SvgNodeDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.5 9H9V8h7.5v5.708a2.5 2.5 0 010 4.584V24H9v-1h6.5v-4.5a2.5 2.5 0 010-5V9zm7 7.707l2.646 2.647.708-.708L23.207 16l2.647-2.646-.708-.708-2.646 2.647-2.646-2.647-.708.708L21.793 16l-2.647 2.646.708.708 2.646-2.647zm-7 .793a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgNodeDelete
