import React, { SVGProps } from 'react'

const SvgVisible = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 19a6.495 6.495 0 01-5.478-3A6.495 6.495 0 0116 13c2.3 0 4.322 1.194 5.478 3A6.495 6.495 0 0116 19zm0-7a7.499 7.499 0 016.635 4A7.499 7.499 0 0116 20a7.499 7.499 0 01-6.635-4A7.499 7.499 0 0116 12zm0 6a2 2 0 100-4 2 2 0 000 4z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgVisible
