"use client";
import React, { useEffect } from "react";
import Home from '@/component/home';
import axios from "axios";

const HomePage = () => {
    useEffect(() => {
      const getData = async () => {
        try{
           const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
           console.log(data);
        }
        catch(err){
          console.log(err);
        }
      }
      getData();
    },[])
  return <Home />;
};

export default HomePage;
