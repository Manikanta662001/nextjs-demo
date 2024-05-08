import React from "react";
import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Welcome to Home page</h1>
      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />

      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/products"}>products</Link>
        </li>
        <li>
          <Link href={`/products/${33}`}>products with prouctId</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
