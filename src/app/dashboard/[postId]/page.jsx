"use client"
import { useSession,useState } from 'next-auth/react'
import Link from 'next/link';
import { useRouter,useParams } from 'next/navigation'
import React from 'react'
import styles from "./page.module.css";

const updatePost = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = useSession();

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  
  
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  console.log(id)
  // location.reload();
 

    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const content = e.target[1].value;
      const categoryId = e.target[2].value
      const imageInput = e.target[3];
      const image = imageInput.files[0];
     
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("categoryId", categoryId);
      formData.append("image", image);

      

      try {
        
        await fetch(`http://localhost:8080/api/posts/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            title,
            content,
            categoryId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        // Second request to upload the image
        await fetch(`http://localhost:8080/api/posts/image/upload/${id}`, {
          method: "PUT",
          body: formData,
        });
        e.target.reset();
        router.push("/dashboard");
      } catch (err) {
        console.log(err);
      }
    };


  
return (
  
  <form className={styles.new} onSubmit={handleSubmit} encType="multipart/form-data">
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
    <input className="image-input" type="file" />
    <button className={styles.button}>Save</button>
  </form>

  );
};

export default updatePost