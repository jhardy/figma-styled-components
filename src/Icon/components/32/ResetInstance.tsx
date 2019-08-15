import React, { SVGProps } from 'react'

const SvgResetInstance = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.793 15.5l.353-.354 8-8 .354-.353.354.353 8 8 .353.354-.707.707-.354-.353L15.5 8.207 8.207 15.5l7.293 7.293 3.646-3.646.354-.354.707.707-.353.354-4 4-.354.353-.354-.353-8-8-.353-.354zm7.914-.5H17a6 6 0 014.243 10.243l-.707-.707A5 5 0 0017 16h-2.294l1.647 1.645-.708.708-2.5-2.5-.353-.354.353-.354 2.5-2.5.708.708L14.707 15z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgResetInstance
