"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getData = async () => {
        try {
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
           setPosts(data);
        } catch(err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
      getData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map((post: any) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
};

export default Home;
