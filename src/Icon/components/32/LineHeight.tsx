import React, { SVGProps } from 'react'

const SvgLineHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 10H9V9h14v1zm0 13H9v-1h14v1zm-10.452-3l2.8-8h1.304l2.8 8h-.954l-.7-2h-3.596l-.7 2h-.954zM16 12.862L17.448 17h-2.896L16 12.862z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLineHeight
