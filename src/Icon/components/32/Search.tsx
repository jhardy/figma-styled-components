import React, { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.103 15.052a3.552 3.552 0 11-7.103 0 3.552 3.552 0 017.103 0zm-.706 3.553a4.552 4.552 0 11.707-.707l3.25 3.249-.708.707-3.249-3.25z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgSearch
