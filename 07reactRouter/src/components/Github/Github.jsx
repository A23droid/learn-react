import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {
    const {id} = useParams();
    const data = useLoaderData() 
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/A23droid")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers: {data.followers}
    <img src= {data.avatar_url} alt="Git Pic" width={300}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async ({params}) => {
    const response = await fetch(`https://api.github.com/users/${params.id}`) 
    return response.json();
}