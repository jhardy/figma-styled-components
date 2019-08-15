import React, { SVGProps } from 'react'

const SvgLetterSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 22V10h1v12H8zm15 0V10h1v12h-1zm-10.452-2l2.8-8h1.304l2.8 8h-.954l-.7-2h-3.596l-.7 2h-.954zM16 12.862L17.448 17h-2.896L16 12.862z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgLetterSpacing
