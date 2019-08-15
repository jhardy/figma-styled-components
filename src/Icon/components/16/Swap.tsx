import React, { SVGProps } from 'react'

const SvgSwap = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.61 5.688l-1.175 1.468A5.5 5.5 0 003.432 4.937l.83.557a4.5 4.5 0 018.215 2.057l-2.2-1.467-.554.832 3 2 .381.254.286-.358 2-2.5-.78-.624zm-12 1.5l-2 2.5.78.624 1.175-1.468a5.484 5.484 0 001.016 2.43 5.5 5.5 0 008.986-.21l.001-.001-.83-.557-.002.001A4.5 4.5 0 013.524 8.45l2.2 1.467.554-.832-3-2-.381-.254-.286.358z'
      fill='currentColor'
      fillOpacity={0.8}
    />
  </svg>
)

export default SvgSwap
