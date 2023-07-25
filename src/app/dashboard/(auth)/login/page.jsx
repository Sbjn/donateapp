/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const session = useSession();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    
      signIn("credentials", {
        username,
        password,
      });
   };

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  return (
    <div className="flex text-center items-center justify-center text-black ">
      <div className="">
        <h2 className="py-1 text-#bbb text-xl">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-left py-1 text-#bbb" htmlFor="email">
            Email
          </label>
          <input
            className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium"
            type="usernameOrEmai"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <label className="text-left py-1 text-#bbb" htmlFor="password">
            Password
          </label>
          <input
            className="my-2 p-4 border-2 rounded-lg bg-transparent text-#bbb font-medium"
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button
            className="border-2 rounded-lg p-2 my-4 cursor-pointer font-bold text-xl text-white bg-green-500"
            type="submit"
          >
            Login
          </button>
        </form>

        <button
          className="border-2 rounded-lg bg-transparent p-1 my-2 cursor-pointer text-#bbb"
          onClick={() => signIn('google')}
        >
          Login with Google
        </button>

        {err && <p className="text-red-500">Login failed. Please check your credentials.</p>}
      </div>
    </div>
  );
};


export default LoginPage;