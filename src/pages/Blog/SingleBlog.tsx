import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCardDetails from '../../components/Types/models';

interface Props{
  blog:BlogCardDetails,
}
const SingleBlog = () => {
  const {id} = useParams();
  const [blog,setBlog]=useState<Props[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
    .then(res=>res.json())
    .then(data => 
      setBlog(data)
      )
  },[id])
  console.log(blog);
  
     return (
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img className="mb-10 object-cover object-center rounded" alt="hero" src="kjkj" />
    <div className="w-full flex flex-col mb-16 items-center text-center">
      <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">gg</h1>
      <p className="mb-8 leading-relaxed">jjjj</p>
    </div>
    <div className="flex w-full justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <label className="leading-7 text-md text-gray-600">Comments:</label>
          <textarea id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      </div>
  </div>
</section>
);
};

export default SingleBlog;