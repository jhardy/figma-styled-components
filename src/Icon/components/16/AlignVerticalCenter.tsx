import React, { SVGProps } from 'react'

const SvgAlignVerticalCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 6.207l.354-.353 2-2-.708-.708L8.5 4.293V0h-1v4.293L6.354 3.146l-.708.708 2 2L8 6.207zm0 3.586l.354.353 2 2-.708.708L8.5 11.707V16h-1v-4.293l-1.146 1.147-.708-.708 2-2L8 9.793zM1 8.5h14v-1H1v1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgAlignVerticalCenter
