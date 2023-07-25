"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [err, setErr] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try {
      const res = await fetch(`http://localhost:8080/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
    
      if (res.status === 201) {
        router.push('/dashboard/login');
        console.log("resgister sucssesfully");
      } else {
        console.log("user has been existed");
      }
    } catch (err) {
      setErr(true);
    }
  }
  
  return (
    <div className="flex text-center items-center justify-center text-black ">
      <div className="">
        <h2 className="py-1 text-#bbb text-xl">Register</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-left py-1 text-#bbb" value="name">Full name</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium" id="name" placeholder="Full Name" required />
          <label className="text-left py-1 text-#bbb" value="email">Email</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium" type="email" placeholder="Email" id="email" name="email"  required/>
          <label className="text-left py-1 text-#bbb" value="password" required>Password</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium"
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="border-2 rounded-lg p-2 my-4 cursor-pointer font-bold text-xl text-white bg-green-500" type="submit">Register</button>
        </form>
        <p className="text-red-500">{err}</p>
        <Link className="border-2 rounded-lg bg-transparent p-1 my-2 cursor-pointer text-#bbb " rel="stylesheet" href="/dashboard/login" >Already have an account? Login here.</Link>
      </div>
    </div>
  );
};

export default register;