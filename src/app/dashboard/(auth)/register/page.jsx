"use client";
import React from "react";

const register = () => {
  return (
    <div className="flex min-h-screen text-center items-center justify-center text-black ">
      <div className="">
        <h2 className="py-1 text-#bbb text-xl">Register</h2>
        <form className="flex flex-col">
          <label className="text-left py-1 text-#bbb" htmlFor="name">Full name</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium" id="name" placeholder="Full Name" />
          <label className="text-left py-1 text-#bbb" htmlFor="User">Email</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium" type="email" placeholder="Email" id="email" name="email" />
          <label className="text-left py-1 text-#bbb" htmlFor="password">Password</label>
          <input className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium"
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button className="border-2 rounded-lg p-2 my-4 cursor-pointer font-bold text-xl text-white bg-green-500" type="submit">Log In</button>
        </form>
        <button className="border-2 rounded-lg bg-transparent p-1 my-2 cursor-pointer text-#bbb ">Already have an account? Login here.</button>
      </div>
    </div>
  );
};

export default register;
