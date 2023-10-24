'use client'

import Image from 'next/image'
import React from 'react'
import useFilteredAndSortedPosts from '@/hooks/useFilteredAndSortedPosts';

export default function RelatedPost({post}) {
    const filteredCategories = ['Faith','Sin']
const filteredAndSortedPosts = useFilteredAndSortedPosts(post, filteredCategories);
  return (
    <>
      { filteredAndSortedPosts?.map((p, i) =>

        <a href={`/blog/${p.id}`} key={i} className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-12 xl:col-span-12 ">
              <div className="relative w-full p-4 bg-white shadow-lg dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl">
                <div className="grid grid-cols-12 gap-4 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
                  <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 ">
                    <Image src="/images/blog/sm-3.jpg"  alt="image" width={82}
      height={82} />
                  </div>{/*end col*/}
                  <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-8 xl:col-span-8 ">
                    <div className="flex flex-col h-full p-3 ">
                      <div className="block w-full">
                        <span className="text-[12px] bg-green-500/10 text-green-500 dark:text-green-600 rounded font-medium py-0 px-2 inline-block mb-3">{p.category}</span>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 ms-2">{ new Date(p.date).toDateString()}</span>
                      </div>
                      <a href={`/blog/${p.id}`} className="text-lg font-semibold  text-gray-600 dark:text-slate-200 block leading-5 truncate hover:underline hover:underline-offset-[4px]">
                        {p.title}
                      </a>
                    </div>{/*end card-body*/}
                  </div>{/*end col*/}
                </div>{/*end grid*/}
              </div> {/*end card*/}
            </a>
        )}
   </>
   )

}
