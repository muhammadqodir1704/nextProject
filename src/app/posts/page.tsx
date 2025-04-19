import { PostType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import { resolve } from "path";
import {notFound} from "next/navigation";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts2_limit=8"
  );

  await new Promise((resolve) => setTimeout(() => {
    resolve(" ");
  }, 2000));
  return data;
}
 
const PostsPage = async () => {
  const data: PostType[] = await getData();

  if (!data.length) {
    notFound();
  }

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
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
    </>
  );
};

export default PostsPage;
