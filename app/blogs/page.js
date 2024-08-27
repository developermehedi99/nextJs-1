import React from "react";
import blogs from "../data/blogs";
import BlogItems from "../components/BlogItems";
import Link from "next/link";

const page = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold">Blogs list</h1>
      <div className='ml-10 mt-5'>
      {blogs.map((blog) => (
        <Link  key={blog.id} href={`/blogs/${blog.id}`}><BlogItems title={blog.title} /> </Link>
      ))}
      </div>
    </div>
  );
};

export default page;
