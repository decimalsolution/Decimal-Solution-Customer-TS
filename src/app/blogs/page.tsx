import PageIntroduction from "../components/generic/page-introduction";
// import BlogView from "./blog-view";
import { Article } from "../../../types";
// import { AiOutlineSearch } from "react-icons/ai";
// import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";

const Blogs = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs, status: ${res.status}`);
  }

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  const blogs: Article[] = data.data;
  const filteredBlogs = blogs.filter((blog) => !blog.blocked);
  const newblogs: Article[] = filteredBlogs;

  // console.log(newblogs);


  return (
    <div className="mb-16">
      <PageIntroduction title="Blogs" image="/blogs.png" />

      <SearchInput newblogs={newblogs} />

      {/* Search Input
      <div className="flex items-center w-[30%] justify-between mt-6 ml-16 border-2 border-gray-300 rounded-full px-4 py-2 bg-gray-100 shadow-sm  ">
        <input
          type="search"
          className="w-full border-none outline-none bg-transparent placeholder-gray-500"
          placeholder="Search blogs..."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <AiOutlineSearch className="text-gray-500" />
      </div> */}

      {/* Blog Cards */}
      {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {newblogs
          .filter((item) => item.blogTitle.toLowerCase().includes(searchKey.toLowerCase()))
          .map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
          ))}
      </div> */}
    </div>
  );
};

export default Blogs;
