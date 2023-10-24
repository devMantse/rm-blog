import FeaturedPost from '@/components/FeaturedPost';
import RelatedPost from '@/components/RelatedPost';

async function fetchBlogs (){
  const res = await fetch("http://localhost:3000/api/blog", {
    next:{
      revalidate: 10
    }
  });

  const data = await res.json();

  return data.posts
}

export default async function Home() {

  const posts = await fetchBlogs();
  console.log("🚀 ~ file: page.js:18 ~ Home ~ posts:", posts)

 const filteredPosts = posts.filter(post => post.category === "Faith" || post.category  === "Sin").sort();



  return (
   <>
     <div className="flex flex-col">
  <div className="relative w-full py-20">
    <div className="container z-1">
      <div className="grid justify-center grid-cols-12 gap-4 mb-4 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 ">
          <div className="relative w-full mb-10 ">
            <div className="flex-auto p-4">
              <div className="mt-10 text-center">
                <h4 className="my-1 font-semibold text-[30px] md:text-[40px] dark:text-slate-200 mb-5 leading-12">Blogs Section For Everyone</h4>
                <h6 className="text-lg font-medium text-gray-500 dark:text-gray-400">Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h6>
              </div>
            </div>{/*end card-body*/}
          </div> {/*end card*/}
        </div>{/*end col*/}
      </div>{/*end inner-grid*/}
      <div className="grid grid-cols-12 gap-4 mb-4 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9 ">
          <div className="relative w-full p-4 mb-4 bg-white shadow-lg dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl">
            <div className="flex justify-between">
              <p className="dark:text-slate-200">
                <span className="font-medium border-b border-pink-400 border-dashed">Latest Posts </span>
              </p>
              <p className="dark:text-slate-200">
                <span className="font-medium">Today </span>: 21 Augest 2023
              </p>
            </div>
          </div>
      <FeaturedPost posts={posts} />

        </div>{/*end col*/}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3 ">
          <div className="relative w-full p-4 mb-4 bg-white shadow-lg dark:bg-gray-800/40 backdrop-blur-2xl rounded-2xl">
            <span className="font-medium border-b border-pink-400 border-dashed dark:text-slate-200">Related Posts</span>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-4 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12">
            <RelatedPost post={filteredPosts} />
          </div>{/*end grid*/}
        </div>{/*end col*/}
      </div>{/*end inner-grid*/}
    </div>{/*end container*/}
  </div>{/*end section*/}
</div>

   </>
  )
}
