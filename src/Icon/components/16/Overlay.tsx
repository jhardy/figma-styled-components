import React, { SVGProps } from 'react'

const SvgOverlay = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 2H3v12h9v-2H9V4h3V2zm1 2h3v8h-3v3H2V1h11v3zm-3 1h5v6h-5V5z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgOverlay
