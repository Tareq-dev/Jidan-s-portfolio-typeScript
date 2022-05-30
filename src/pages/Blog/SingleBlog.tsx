import React from 'react';
import { useParams } from 'react-router-dom';
import useBlogs from '../../Hooks/useBlogs';

const SingleBlog = () => {
  const {id} = useParams();
  const [blogs]= useBlogs()

     return (
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img className="mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    <div className="w-full flex flex-col mb-16 items-center text-center">
      <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
      <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
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