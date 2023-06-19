import Image from 'next/image'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <div className='flex items-center gap-20 grid-cols-2'>

      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>
          Our Planet - Our Future
        </h1>
        <p className='text-2xl font-light'>
        Every donation makes a difference to those in need.
        Help us to make a difference in the life of thousands of people in need - <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... '>Make a donation!</span>
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>

      <div>
        <Image className='animate-bounce-slow-2 w-full h-big object-cover' src={Hero} alt=""/>
      </div>

    </div>
  )
}
