import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/navbar";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "My Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 text-center">
          <p>© 2024 My App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
