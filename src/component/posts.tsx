import React, { FC } from 'react'
import { PostType } from '@/interface'
import Link from 'next/link'

const Posts: FC<{ data:PostType[]}> = ({data}) => {
  return (
    <table border={1}>
    <thead>
      <tr>
        <th className='text'>id</th>
        <th>title</th>
      </tr>
    </thead>
    <tbody>
      {data.map((c) => (
        <tr key={c.id}>
          <td>{c.id}</td>
          <td>
            <Link href={`/posts/${c.id}`}>{c.title}</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Posts
