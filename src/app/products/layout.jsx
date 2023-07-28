import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-8xl'>
            Our Works
        </h1>
        {children}
    </div>
  )
}

export default Layout