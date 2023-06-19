import React from 'react'
import Link from 'next/link'
const Portfolio = () => {

  return (
    <div>
      <h1 className='my-5 text-4xl'>Choose a gallery</h1>
      <div className='grid grid-cols-3 gap-3  [&>*:nth-child(1)]:bg-[url(/illustration.png)] [&>*:nth-child(2)]:bg-[url(/websites.jpg)] [&>*:nth-child(3)]:bg-[url(/apps.jpg)] '>
        <Link className='border-5 border-solid border-#bbb rounded h-400 w-80 relative !bg-cover hover:text-green-200' href="/portfolio/illustrations">
          <span className='absolute right-3 bottom-3 text-3xl font-bold '>Illustrations</span> 
        </Link>
        <Link className='border-5 border-solid border-#bbb rounded h-text-green-200 w-80 relative !bg-cover hover:text-green-200' href="/portfolio/websites">
          <span className='absolute right-3 bottom-3 text-3xl font-bold'>Websites</span> 
        </Link>
        <Link className='border-5 border-solid border-#bbb rounded h-text-green-200 w-80 relative !bg-cover hover:text-green-200' href="/portfolio/applications">
          <span className='absolute right-3 bottom-3 text-3xl font-bold'>Applications</span> 
        </Link>
      </div>
    </div>
  )
}

export default Portfolio