import React from 'react'

interface ILayout {
    children?: React.ReactNode
}

export default function({children}: ILayout) {
  return (
    <div className='bg-slate-300 w-screen h-full flex flex-col justify-center items-center'>
        {children}
    </div>
  )
}
