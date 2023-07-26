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
        `http://localhost:8080/api/user/${session?.data?.user?.id}/posts`,
        {
          cache: "no-cache",
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
  }, [session?.data?.user?.id]);

  const handleDelete = async (postId) => {
    try {
      await fetch(`http://localhost:8080/api/posts/${postId}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
  

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
            <Link href="/products">
              <button className={styles.card__btn}>Receive</button>
            </Link>
          </div>
        </div>
        <h1 className='h-52 flex justify-center items-center mb-7 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-8xl'>
            My Works
        </h1>
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
                    className="text-2xl items-center font-bold w-96 py-3 px-6 tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    記事のタイトル
                  </th>
                  <th
                    scope="col"
                    className="text-2xl items-center font-bold w-96 py-3 px-6 tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    イメージ
                  </th>
                  <th
                    scope="col"
                    className="text-2xl items-center font-bold w-96 py-3 px-6 tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    コンテンツ
                  </th>
                  <th scope="col" className="w-12 p-4">
                    <span className="sr-only">編集</span>
                  </th>
                  <th scope="col" className=" text-2xl w-20 p-4">
                    <span className="text-red-500 sr-only">X</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {Array.isArray(data) &&
                  data.reverse().map((item) => (
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
                    <td className="text-xl py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.title}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white overflow-hidden">
                    <Image
                        src={item.image ? `http://localhost:8080/api/profiles/${item.image}` : '/logo1.png'}
                        alt="Image"
                        className="object-cover rounded-xl"
                        width={300}
                        height={200}
                      />
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.content}
                    </td>
                    <td>
                      
                      <Link
                        href={`/dashboard/${item.postId}`}
                        onClick={() => Router.push(`/dashboard/${item.postId}`)}
                        className="text-xl text-blue-600 dark:text-blue-500 hover:text-green-500"
                      >
                        編集
                      </Link>
                    </td>
                    <td  className=" py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <button className="text-red-500" onClick={() => handleDelete(item.postId)}>Delete</button>
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