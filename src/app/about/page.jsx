import Image from "next/image";
import React from "react";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div>
      <div className="w-full h-80 relative">
        <Image className="object-cover backdrop-grayscale-0 backdrop-blur-sm"
          src="https://www.careershifters.org/sites/default/files/field/image/play_0.jpg"
          fill={true}
          alt="Who we are"
        />
        <div className="absolute bottom-5 left-5 bg-gradient-to-r from-green-300 to-fuchsia-100 text-black">
          <h1 className="font-bold text-2xl">
          WHO WE ARE. WHAT WE DO
          </h1>
          <h2>To Empower, Engage & Educate To Be A Guiding Force For Children</h2>
        </div>
      </div>
      <div className="justify-center grid grid-cols-2 gap-x-20 mt-9 p-3  ">
        <div className="flex-col grid-rows-2 my-2">
          <h1 className="text-7xl font-extrabold">Our Mission</h1>
          <p className="text-justify text-base grid-flow-col my-2 gap-2 auto-rows-min">
            To empower, engage and educate children and women from lower
            sections of the society.
            
            so that they are able to stand up for
            themselves and find their voice in a society that needs 
            
            to be built
            on respect, dignity and equality for every individual, regardless of
            their gender, caste or class.
          </p>
          <p>
            To make these children and women discover their
            full potential, and equipping them with skills to ensure that they
            can utilize this potential.
          
            
          </p>
        </div>
        <div className="flex-col grid-rows-2 my-2">
          <h1 className="text-7xl font-extrabold">Our Vision</h1>
          <p className="text-justify text-base grid-flow-col my-2 gap-2 auto-rows-min">
            To be a guiding force for children and women who find it difficult
            to fulfill their most basic needs by enabling them to build a better
            life for themselves, by having a community based approach for their
            development. 
            <br/>
            To inspire, motivate and encourage people to come
            together and take responsibility for making a better society for
            individuals on the margins, by using their access and privilege to
            help someone else. 
          </p>
          <div className="mt-9">
          <Button url="/contact" text="contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
