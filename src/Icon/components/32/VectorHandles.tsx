import React, { SVGProps } from 'react'

const SvgVectorHandles = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.586 16L10.5 14.914 9.414 16l1.086 1.086L11.586 16zm-.379-1.793L10.5 13.5l-.707.707-1.086 1.086L8 16l.707.707 1.086 1.086.707.707.707-.707 1.086-1.086.207-.207h2.085a1.5 1.5 0 002.83 0H19.5l.207.207 1.086 1.086.707.707.707-.707 1.086-1.086L24 16l-.707-.707-1.086-1.086-.707-.707-.707.707-1.086 1.086-.207.207h-2.085a1.5 1.5 0 00-2.83 0H12.5l-.207-.207-1.086-1.086zM22.586 16L21.5 14.914 20.414 16l1.086 1.086L22.586 16z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgVectorHandles
