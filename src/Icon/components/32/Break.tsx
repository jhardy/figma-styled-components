import React, { SVGProps } from 'react'

const SvgBreak = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      opacity={0.9}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13 9v3h1V9h-1zm9.103.896a2.975 2.975 0 00-4.207 0l-2.75 2.75.707.707 2.75-2.75a1.975 1.975 0 012.793 2.793l-2.75 2.75.707.707 2.75-2.75a2.975 2.975 0 000-4.207zM9.896 22.103a2.975 2.975 0 010-4.207l2.75-2.75.707.707-2.75 2.75a1.975 1.975 0 002.793 2.793l2.75-2.75.707.707-2.75 2.75a2.975 2.975 0 01-4.207 0zM23 19h-3v-1h3v1zm-4 1v3h-1v-3h1zm-7-7H9v1h3v-1z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgBreak
