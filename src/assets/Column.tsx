import React from 'react'

type Props = {
  color: string
}

const Column = ({ color = '#EFEDEE' }: Props): JSX.Element => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="22"
        width="6"
        height="22"
        transform="rotate(-90 0 22)"
        fill={color}
      />
      <rect
        y="14"
        width="6"
        height="22"
        transform="rotate(-90 0 14)"
        fill={color}
      />
      <rect
        y="6"
        width="6"
        height="22"
        transform="rotate(-90 0 6)"
        fill={color}
      />
    </svg>
  )
}

export default Column
