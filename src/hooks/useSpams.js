import { useEffect, useState } from "react";


 const useSpams = () =>{
    const [spams, setSpams] = useState([])
    useEffect(()=>{
        fetch('spam.json')
        .then(res => res.json())
        .then(data => setSpams(data))
      },[])
      return [spams, setSpams]
 }
  
 export default useSpams;
