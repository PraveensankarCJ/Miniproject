import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFetch = (url) => {
  const [data,setData] = useState([])
  const [loading,setLoding] = useState(false)
  const [error,setError] = useState(false)
  
  useEffect(()=>{
   const fetchData = async () => {
    setLoding(true);
    try{
      const res = await axios.get(url)
      setData(res.data);
    }catch(err){
      setError(err)
    }
    setLoding(false)
   };
    fetchData();
  },[url]);


const reFetch = async () => {
    setLoding(true);
    try{
      const res = await axios.get(url)
      setData(res.data);
    }catch(err){
      setError(err)
    }
    setLoding(false)
   };

   return {data,loading,error,reFetch};
};

export default useFetch;