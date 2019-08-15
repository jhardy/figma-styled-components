import React, { SVGProps } from 'react'

const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 8h-6V7h6v1zm4 9a7 7 0 11-2.384-5.263l.09.091.557.556A6.974 6.974 0 0123 17zm-.285-4.35l.113-.114.707-.708.707-.707-.707-.707-.707-.707L22.121 9l-.707.707-.707.707-.068.068a8 8 0 102.075 2.167zm-.723-.95l.13.128.706-.707-.707-.707-.701.702c.2.184.391.38.572.584zM16.5 17v-5h-1v5a.5.5 0 001 0z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTimer
