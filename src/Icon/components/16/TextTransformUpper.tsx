import React, { SVGProps } from 'react'

const SvgTextTransformUpper = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.049 12l2.8-8h1.303l2.8 8H7l-.7-2H2.702l-.7 2H1.05zM4.5 4.862L5.949 9H3.052l1.449-4.138zM11.89 12h-2.89V4h2.796c1.672 0 2.454.953 2.454 2.125 0 1.031-.61 1.484-1.297 1.672v.078c.734.047 1.61.734 1.61 2 0 1.203-.782 2.125-2.673 2.125zm-1.89-3.64V11h1.921c1.079 0 1.624-.422 1.624-1.125 0-.813-.561-1.516-1.608-1.516h-1.937zM10 5v2.516h1.765c.875 0 1.51-.547 1.51-1.391 0-.703-.44-1.125-1.447-1.125H10z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgTextTransformUpper
