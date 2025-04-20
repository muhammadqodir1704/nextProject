import axios from 'axios'
import React from 'react'

async function getDetailedData(id: string){
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    return data
}

const PageDetail = async ({params}: {params: {id: string}}) => {
    const data = await getDetailedData(params.id)
  return (
    <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
  )
}

export default PageDetail
