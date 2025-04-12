import { PostType } from "@/interface";
import axios from "axios";
import Link from "next/link";

async function getData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=8"
  );
  return data;
}

const PostsPage = async () => {
  const data: PostType[] = await getData();

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
          {data.map(c => (
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
