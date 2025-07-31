import React from 'react'

const Title = ({ title }) => {
  return (
    <h2 className='text-center font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700 leading-tight px-4 xs:px-0'>{title || 'title'}</h2>
  )
}

export default Title