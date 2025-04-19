import React from 'react'

const NotFoundPosts = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-10">
            No posts found
        </h1>
        <p className="text-center mt-5">
            Sorry, but there are no posts available at the moment.
        </p>
        <div className="flex justify-center mt-5">
            <img src="/images/no-posts.png" alt="No posts" className="w-1/2" />
        </div>
    </div>
  )
}

export default NotFoundPosts
