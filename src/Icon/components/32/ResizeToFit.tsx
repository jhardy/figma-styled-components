import React, { SVGProps } from 'react'

const SvgResizeToFit = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.646 9.354L12.293 13H10v1h4v-4h-1v2.293L9.354 8.646l-.708.708zM19.707 13l3.647-3.646-.707-.708L19 12.293V10h-1v4h4v-1h-2.293zm0 6l3.647 3.646-.707.708L19 19.707V22h-1v-4h4v1h-2.293zm-7.414 0l-3.647 3.646.708.708L13 19.707V22h1v-4h-4v1h2.293z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgResizeToFit
