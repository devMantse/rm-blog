import Image from 'next/image'
import React from 'react'

export default function FeaturedPost({posts}) {
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove non-word characters
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
}

  return (
     <>
        {
        posts?.map((post, i) =>
            <div key={i} className="relative w-full p-4 mb-4 bg-white shadow-lg dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl">
            <div className="grid grid-cols-12 gap-4 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
              <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4 ">
                <Image src="/images/blog/sm-3.jpg" alt="image" width={500}
      height={500} className="h-auto max-w-full rounded-xl" />
              </div>{/*end col*/}
              <div className="col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-8 xl:col-span-8 ">
                <div className="flex flex-col h-full p-3 ">
                  <div className="block w-full">
                    <span className="text-[12px] bg-pink-500/10 text-pink-500 dark:text-pink-600 rounded font-medium py-1 px-2 inline-block mb-3">{post.category}</span>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 ms-2">{post.date}</span>
                  </div>
                  <a href={`/blog/${slugify(post.title)}`} className="text-[20px] md:text-3xl lg:text-3xl xl:text-[32px] leading-[30px] mb-5 md:mb-0 font-spectral font-semibold  text-gray-800 dark:text-slate-200 block">
                   {post.title}
                  </a>
                  <div className="flex flex-wrap justify-between mt-auto">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded">
                        <img className="object-cover object-center w-full h-full overflow-hidden rounded" src="assets/images/users/avatar-1.jpg" alt="logo" />
                      </div>
                      <div className="ml-2">
                        <a tabIndex={0} className="text-gray-800 cursor-pointer hover:text-gray-500 focus:text-gray-500 dark:text-gray-100 focus:outline-none focus:underline"><h5 className="text-sm font-medium ">Fitbit Incorporation</h5></a>
                        <p tabIndex={0} className="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">San Diego, California</p>
                      </div>
                    </div>
                    <a href className="self-center block font-medium underline text-slate-500 dark:text-slate-400 hover:text-slate-600 decoration-1 decoration-dashed underline-offset-4 decoration-primary-500 focus:outline-none">Read More <i data-lucide="arrow-right" className="self-center inline-block w-4 h-4 ms-1" /></a>
                  </div>
                </div>{/*end card-body*/}
              </div>{/*end col*/}
            </div>{/*end grid*/}
          </div>

        ).slice(0,2)
       }
     </>
  )
}
