import React, { useEffect, useState } from 'react'
// import axios from 'axios'

function AxiosData() {
  const [userData,setData] = useState([])
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then(function (response) {
  //     console.log(response.data)
  //     setData(response.data)
  //   });
  // },[])
  useEffect(()=>{
    const fetchapi =async ()=>{
      const url= "https://jsonplaceholder.typicode.com/users"
         const response = await fetch(url)
         const resJson = await response.json()
        //  console.log(resJson)
         setData(resJson)
    }
    fetchapi();
  },[])
  return (
    <div>
      {userData.map((elem,index)=>{
        return (
          <div key={index} className="flex gap-5">
            <p className='border-b-2 border-zinc-400'>{elem.id}</p>
            <p className='border-b-2 border-zinc-400'>{elem.name}</p>
            <p className='border-b-2 border-zinc-400'>{elem.username}</p>
            <p className='border-b-2 border-zinc-400'>{elem.email}</p>
            <p className='border-b-2 border-zinc-400'>{elem.address.street}</p>
            <p className='border-b-2 border-zinc-400'>{elem.address.city}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AxiosData