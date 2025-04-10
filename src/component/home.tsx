"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getData = async () => {
        try{
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
           console.log(data);
        }
        catch(err){
          console.log(err);
        }finally{
            setLoading(false);
        }
      }
      getData();
    },[])
  return <Home />;
};

export default Home;
