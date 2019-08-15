import React, { SVGProps } from 'react'

const SvgEffects = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.5 9v-.5h-1v3h1V9zm-5.096 1.697l-.354-.354-.707.707.354.354 1.414 1.414.353.354.708-.708-.354-.353-1.414-1.414zm9.9.707l.353-.354-.707-.707-.354.354-1.414 1.414-.354.353.708.708.353-.354 1.414-1.414zM9 15.5h-.5v1h3v-1H9zm12 0h-.5v1h3v-1H21zm-8.182 4.39l.354-.355-.708-.707-.353.354-1.414 1.414-.354.354.707.707.354-.354 1.414-1.414zm7.071-.708l-.354-.354-.707.707.354.354 1.414 1.414.354.354.707-.707-.354-.354-1.414-1.414zM16.5 21v-.5h-1v3h1V21zm.998-5.002a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm1 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgEffects
