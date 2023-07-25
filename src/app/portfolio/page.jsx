import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch("http://localhost:8080/api/categories/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Portfolio = async () => {

  const data = await getData();

  return (
    <div>
      <h1 className='my-5 text-4xl'>Choose a gallery</h1>
      <div className='grid grid-cols-3 gap-3  [&>*:nth-child(1)]:bg-[url(/illustration.png)] [&>*:nth-child(2)]:bg-[url(/websites.jpg)] [&>*:nth-child(3)]:bg-[url(/apps.jpg)] '>
      {data.map((item) => (
        <div className='border-5 border-solid border-#bbb rounded h-400 w-80 relative !bg-cover hover:text-green-200' key={item.categoryId}>
        <Link href="/products/illustrations">
          <span className='absolute right-3 bottom-3 text-3xl font-bold '>{item.categoryTitle}</span> 
        </Link>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio