import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Mywork.css'

const MyWork = () => {
     return (
          <div className="py-8 pb-14 bg-work">
          <h1 className="text-center text-white text-3xl mt-3 mb-8 font-bold">Reaserch</h1>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://static.scientificamerican.com/sciam/cache/file/AC11C426-00F4-49B4-B68D2871D0F1BD65_source.jpg?w=590&h=800&394D501B-A280-4491-AF19797B0E4675FC"
               alt="Trek"
             />
             <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Cancer Reaserch</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://i.ibb.co/Y8ytkbP/Pngtree-variant-metal-texture-variant-covid-19-6225502.png"
               alt="Trek"
             />
             <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Covid19 Reaserch</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://www.thoughtco.com/thmb/0RD3ERm4b170v4zMAe_rcnNMSJM=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-932732476-5c4a21ce46e0fb0001d85d03.jpg"
               alt="Trek"
             />
             <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Mutation</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://media.istockphoto.com/photos/virus-with-rna-molecule-inside-viral-genetics-concept-3d-rendered-picture-id1211803628?k=20&m=1211803628&s=612x612&w=0&h=k2eXCPv6CPYnQuFJF2sGzWJG38U4v8xc1-HajwrX8bI="
               alt="Trek"
             />
              <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Genetic Mutation</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://www.thoughtco.com/thmb/SoS1fT1E6cBHujFbSR55ZLUAV7Q=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gene_mutation-5a625ae47d4be80036ab7f89.jpg"
               alt="Trek"
             />
              <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Generical Mutation</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://media.istockphoto.com/photos/antibody-and-virus-3d-illustration-picture-id1171703301?k=20&m=1171703301&s=612x612&w=0&h=-tKuOL_jpoT4ekauhOMcTVPDFN9lWuQTpYe1jsV0HKE="
               alt="Trek"
             />
            <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Dna Virus</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md'>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://th-thumbnailer.cdn-si-edu.com/d8DW17MD3Lycmz41hdVuuPe5pdk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/4b/1d/4b1d27cf-504c-45b5-9b6c-4903319e0557/istock_000077973371_medium.jpg"
               alt="Trek"
             />
             <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Genes in human DNA</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md '>Details</button>
             </div>
               </div>
              </SwiperSlide>
              <SwiperSlide>
               <div className="p-2">
               <img
               src="https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2012/06/Differences-Between-DNA-and-RNA-Viruses_Figure-2.jpg?w=640&ssl=1"
               alt="Trek"
             />
             <div className='text-center font-bold'>
             <h1 className="mt-6 bg-yellow-400 py-1 text-3xl">Diff Dna vs Rna</h1>
             <button className='btn bg-info text-black mt-4 btn-md font-bold text-md '>Details</button>
             </div>
               </div>
              </SwiperSlide>
            </Swiper>
          </div>
     );
};

export default MyWork;