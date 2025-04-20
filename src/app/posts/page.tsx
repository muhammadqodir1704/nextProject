import { PostType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import { resolve } from "path";
import {notFound} from "next/navigation";
import Posts from "@/component/posts";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );   
  return data;
}
 
const PostsPage = async () => {
  const data: PostType[] = await getData();

  if (!data.length) {
    notFound();
  }

  return (
    <>
       <Posts data={data} />
    </>
  );
};

export default PostsPage;
