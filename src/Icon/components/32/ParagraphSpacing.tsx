import React, { SVGProps } from 'react'

const SvgParagraphSpacing = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M23 9H9V8h14v1zm-7 .793l.354.353 2 2-.708.708-1.146-1.147v4.586l1.146-1.147.708.708-2 2-.354.353-.354-.353-2-2 .708-.708 1.146 1.147v-4.586l-1.146 1.147-.708-.708 2-2L16 9.793zM23 19v1H9v-1h14zm0 4v1H9v-1h14z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgParagraphSpacing
