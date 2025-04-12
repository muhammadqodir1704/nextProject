"use client"

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar-1">
      <button onClick={() => router.push("/")}>Bosh Sahifa</button>
      <button onClick={() => router.push("/about")}>Men Haqimda</button>
      <button onClick={() => router.push("/contact")}>Bog'lanish</button>
      <button onClick={() => router.push("/posts")}>Post</button>

    </div>
  )
}
