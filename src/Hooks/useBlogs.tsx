import { useEffect, useState } from "react"
import BlogCardDetails from './../components/Types/models';

const useBlogs = ()=>{
     const [blogs,setBlogs] = useState<BlogCardDetails[]>([])
     useEffect(()=>{
          fetch('blogs.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
     },[])
     return[blogs]
}
export default useBlogs;