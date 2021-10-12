import { useState, useEffect } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)



        useEffect(() => {
        setTimeout(() => {
        fetch("https://firebasestorage.googleapis.com/v0/b/proyecto-de-pruebas-d870a.appspot.com/o/db.json?alt=media&token=f6db0402-9936-4bfa-b477-64ea6251941c")
      .then(res => {
         return res.json()
        })
      .then(data => {
          setData(data)
          setIsPending(false)
      })
      }, 1000); 
    }, [url])
    
    return { data, isPending }
 }

 
export default useFetch;