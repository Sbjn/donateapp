/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [data, setData] = useState([]);
  const session = useSession();
  console.log(session);


  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://localhost:8080/api/user/${session.data.user.id}/posts`,
        {
          cache: "reload",
        }
      );

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  

  if (session.status === "authenticated") {

    return (
      <>
        <div className={styles.card}>
          <div className={styles.singlecard}>
            <div className={styles.card__body}>
              <Image
                className={styles.card__image}
                src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                alt="Image"
                width={300}
                height={200}
              />
            </div>
            <Link href="/dashboard/donate-form">
              <button className={styles.card__btn}>Donate</button>
            </Link>
          </div>
          <div className="single-card">
            <div className={styles.card__body}>
              <Image
                className={styles.card__image}
                src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
                alt="image"
                width={300}
                height={200}
              />{" "}
            </div>
            <Link href="/blog">
              <button className={styles.card__btn}>Receive</button>
            </Link>
          </div>
        </div>
      
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col justify-center items-center">
            <table className="w-56 table-fixed ">
              <thead className="bg-gray-100 dark:bg-gray-700 w-96">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-96 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Post Title
                  </th>
                  <th
                    scope="col"
                    className="w-96 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="w-96 py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Content
                  </th>
                  <th scope="col" className="w-12 p-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {data.reverse().map((item) => (
                  <tr
                    key={item.postId}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <label  className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white overflow-hidden">
                    <Image
                        src={item.image ? `http://localhost:8080/api/profiles/${item.image}` : '/path/to/default/image.jpg'}
                        alt="Image"
                        className="object-cover rounded-xl"
                        width={300}
                        height={300}
                      />
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.content}
                    </td>
                    <td>
                      <Link
                        href={`/dashboard/${item.postId}`}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;