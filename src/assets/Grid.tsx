import React from 'react'

type Props = {
  color: string
}

const Grid = ({ color = '#EFEDEE' }: Props): JSX.Element => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="6" height="6" fill={color} />
      <rect y="8" width="6" height="6" fill={color} />
      <rect y="16" width="6" height="6" fill={color} />
      <rect x="8" width="6" height="6" fill={color} />
      <rect x="8" y="8" width="6" height="6" fill={color} />
      <rect x="8" y="16" width="6" height="6" fill={color} />
      <rect x="16" width="6" height="6" fill={color} />
      <rect x="16" y="8" width="6" height="6" fill={color} />
      <rect x="16" y="16" width="6" height="6" fill={color} />
    </svg>
  )
}

export default Grid
