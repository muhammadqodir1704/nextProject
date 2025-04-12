"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PostType } from "@/interface";
import Link from "next/link";

const Home = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getData = async () => {
        try {
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8");
           setPosts(data);
        } catch(err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
      getData();
    }, []);

    return (
     <>
     {
        loading ? "Loading..." : posts.map(c => (
          <div key={c.id}>
            <Link href={`/posts/${c.id}`}>{c.title}</Link>
          </div>
        ))
     }
     </>
    );
};

export default Home;
