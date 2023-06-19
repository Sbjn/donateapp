import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const blog = () => {
  return (
    <div>
      <Link 
        className='flex grid-cols-2 gap-5 mb-14 mx-14 items-center'
        href="/blog/testID">
        <div>
          <Image 
          className="object-cover"
          src="https://instagram.fhnd2-2.fna.fbcdn.net/v/t51.2885-15/335916488_3414114535529028_3057281251488487223_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fhnd2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xQgovkN9ioMAX-F1WfY&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzA1ODk4MTUwNTc5OTYwMTExNA%3D%3D.2-ccb7-5&oh=00_AfBjOKsPwqcdEPB8o-jYiozpXEb1Acnp_XU8ezBjUvARpA&oe=64865EB7&_nc_sid=4f9c1e" 
          alt=""
          width={400}
          height={250}
          />
        </div>
        <div className='flex flex-col gap-5 justify-between'>
          <h1 className="text-5xl font-bold">
          Đoàn Văn Hậu
          </h1>
          <p className="text-xl">
          Đoàn Văn Hậu là một cầu thủ bóng đá chuyên nghiệp người Việt Nam chơi ở vị trí hậu vệ trái cho câu lạc bộ Công an Hà Nội và đội tuyển quốc gia Việt Nam. Anh được gọi vào đội tuyển khi mới 18 tuổi và trở thành cầu thủ trẻ nhất tuyển Việt Nam năm 2017
          </p>
        </div>
      </Link>
      
    </div>
  )
}

export default blog