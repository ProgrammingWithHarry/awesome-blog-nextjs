// import SampleBlogs from "@/config/sampleblogs";
import React from "react"; 
import { Button, buttonVariants } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

interface BlogType {
  slug: string; 
  title: string;
  description: string; 
  imageUrl?: string;

};

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent)

const blogs: BlogType[] = dirContent.map(file=>{ 
  const fileContent = readFileSync(`content/${file}`, "utf-8");
  const {data} = matter(fileContent)
  const value: BlogType = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    imageUrl: data?.imageUrl
  }
  return value
})

console.log(blogs)
 

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: BlogType, index: number) =>  (
          <div
            key={index}
            className= "shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl?blog.imageUrl: "/blogimg.jpg"}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant:"default" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Blogs - ProgrammingWithHarry',
  description: 'A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.',
}
 

export default BlogList;
