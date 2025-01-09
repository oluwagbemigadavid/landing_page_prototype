import React from 'react'

type Props = {}

const GridLines = (props: Props) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="absolute bg-yellow-600 w-full h-[2px] top-[100px]"></div>
      <div className="absolute bg-yellow-600 w-full h-[2px] bottom-[100px]"></div>
      <div className="absolute bg-yellow-600 w-[2px] h-full left-[100px]"></div>
      <div className="absolute bg-yellow-600 w-[2px] h-full right-[100px]"></div>
    </div>
  )
}

export default GridLines