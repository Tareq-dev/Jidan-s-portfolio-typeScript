import React from 'react';
import useBlogs from '../../Hooks/useBlogs';
import BlogCard from './BlogCard';

const Blogs = () => {
  const [blogs]= useBlogs()
     return (
          <div>
               <img className='w-full' src="https://i.ibb.co/02MQ66s/crisprd3-780x450.jpg" alt="" />
          <h1 className="text-3xl text-center mt-5 uppercase font-bold">Blog</h1>
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
            {
              blogs.map(blog=> <BlogCard blog={blog} ></BlogCard>)
            }
            </div>
            </div>
            </div>
            </div>
     );
};

export default Blogs;