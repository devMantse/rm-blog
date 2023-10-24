'use client'

import React, { useEffect, useState } from 'react'

export default function BlogDetails({ params }) {
  const [blog, setBlog] = useState()
  console.log("🚀 ~ file: page.jsx:7 ~ BlogDetails ~ blog:", blog)

  const id = params
  console.log("🚀 ~ file: page.jsx:10 ~ BlogDetails ~ id:", id)




   useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/blog/${id}`, {

        });

        if (res.status === 200) {
          const data = await res.json();
          setBlog(data.posts); // Update the state with the fetched blog data
        } else {
          // Handle the error case, e.g., set an error message
        }
      } catch (error) {
        // Handle network or other errors
      }
    };

    fetchBlogDetails();
  }, [id]);


  return (
    <div>ssss</div>
  )
}
