"use client"
import { useSession,useState } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from "./page.module.css";
import Button from "../../../components/Button/Button";

const donateform = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const content = e.target[1].value;
      const categoryId = e.target[2].value
  
      try {
        await fetch(`http://localhost:8080/api/category/${categoryId}/user/${session.data.user.id}/posts`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            categoryId,
          }),
        });
        
        e.target.reset()
        router?.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    };


  
return (
  
  <form className={styles.new} onSubmit={handleSubmit}>
    <label className="donate-label">Donate Title</label>
    <input type="text" placeholder="Title" className={styles.input} required />
    <label className="donate-label">Donate info</label>
    <textarea
      placeholder="Content"
      className={styles.textArea}
      cols="30"
      rows="10"
      required
    ></textarea>
    <select className={styles.input}>
      <option>1</option>
      <option>2</option>
      <option>4</option>
    </select>
    <button className={styles.button}>Donate</button>
  </form>

  );
};

export default donateform