import React from "react";
import Button from "../../../components/Button/Button";
import Image from "next/image";

//get All post by category ID


async function getData(categoryId) {
  const res = await fetch(`http://localhost:8080/api/category/${categoryId}/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


const Caregory = async ({ params }) => {
  const data = await getData(params.categoryId);
  return (
    <div>
    {data.map((item) => (
      
    <div className="[&>*:nth-child(2n+1)]:flex-row-reverse" key={item.categoryId}>
      <h1 className="text-green-200 font-bold my-5 text-4xl">
        {item.title}
      </h1>
      <div className="flex mt-14 mb-24 gap-14 ">
        <div className="flex flex-1 flex-col gap-5 justify-center">
          <h1 className="text-5xl font-bold">TEST</h1>
          <p className="text-xl">DEST</p>
          <Button url="/blog" text="See More" />
        </div>
        <div className="flex flex-1 h-big relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://instagram.fhnd2-2.fna.fbcdn.net/v/t51.2885-15/335916488_3414114535529028_3057281251488487223_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fhnd2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xQgovkN9ioMAX-F1WfY&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzA1ODk4MTUwNTc5OTYwMTExNA%3D%3D.2-ccb7-5&oh=00_AfBjOKsPwqcdEPB8o-jYiozpXEb1Acnp_XU8ezBjUvARpA&oe=64865EB7&_nc_sid=4f9c1e"
            alt=""
          />
        </div>
      </div>
    </div>
    
    ))}
    </div>
  );
};

export default Caregory;