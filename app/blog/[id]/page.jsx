'use client'

import React, { Suspense, useEffect, useState } from 'react'

import Loading from '../loading';

export default function BlogDetails({ params }) {
 const [blog, setBlog] = useState(null);

  const id = params.id; // Assuming `id` is the property you want to use

  const fetchBlogDetails = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blog/${id}`);

      if (res.status === 200) {
        const data = await res.json();
        const blogData = data.post;
        setBlog(blogData);
      } else {

      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, );



  console.log("🚀 ~ file: page.jsx:755 ~ BlogDetails ~ blog:", blog?.title)


  return (
   <>
 <div className="flex flex-col">
  <div className="relative w-full py-32">
    <div className="container z-1">
 {blog ? (
        <div>
          <h2 className='mb-8 text-7xl'>{blog?.title}</h2>
          <p>{blog?.description}</p>
        </div>
      ) : (
       <Suspense fallback={Loading}/>
      )}
     </div>
     </div>
    </div>
   </>
  )
}
