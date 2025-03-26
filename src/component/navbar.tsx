"use client"

import { useRouter } from "next/navigation";

const router = useRouter();
const navbar = () => {
  return (
    <div className="navbar-1">
    <button onClick={() => router.push("/")}>Bosh Sahifa</button>
    <button onClick={() =>router.push("/about")}>Men Haqimda</button>
    <button onClick={() => router.push("/contact")}>Bog'lanish</button>
  </div>
  )
}

export default navbar
