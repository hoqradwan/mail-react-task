import { useEffect, useState } from "react";


 const useInboxes = () =>{
    const [inboxes, setInboxes] = useState([])
    useEffect(()=>{
        fetch('inbox.json')
        .then(res => res.json())
        .then(data => setInboxes(data))
      },[])
      return [inboxes, setInboxes]
 }
  
 export default useInboxes;

