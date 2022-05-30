import { useEffect, useState } from "react"
import BlogCardDetails from './../components/Types/models';

const useBlogs = ()=>{
     const [blogs,setBlogs] = useState<BlogCardDetails[]>([])
     useEffect(()=>{
          fetch('http://localhost:5000/blogs')
          .then(res => res.json())
          .then(data => setBlogs(data))
     },[])
     return[blogs]
}
export default useBlogs;