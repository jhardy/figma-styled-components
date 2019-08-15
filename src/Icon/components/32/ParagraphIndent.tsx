import React, { SVGProps } from 'react'

const SvgParagraphIndent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.854 10.146l-2.5-2.5-.708.708L10.293 10H5v1h5.293l-1.647 1.646.708.707 2.5-2.5.353-.353-.353-.354zM23 10h-9v1h9v-1zm0 4H9v1h14v-1zm0 4H9v1h14v-1zm0 4H9v1h14v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgParagraphIndent
