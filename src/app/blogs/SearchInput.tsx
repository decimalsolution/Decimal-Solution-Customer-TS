'use client'

import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Article } from '../../../types';
import BlogView from './blog-view';

interface SearchProps {
  newblogs: Article[];
}

const SearchInput = ({newblogs}:SearchProps) => {

  const [searchKey, setSearchKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("newest");

  // Create a sorted version of newblogs based on the sortOrder
  const sortedBlogs = sortOrder === "newest" 
    ? [...newblogs].reverse() // Create a new array and reverse it
    : newblogs; // Default order

  // Filter blogs based on search key
  const filteredBlogs = sortedBlogs.filter((item) => 
    item.blogTitle.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <div className='flex items-center justify-around mt-10 '>
        <div className="flex items-center w-[30%] justify-between  ml-16 border-2 border-gray-300 rounded-full px-4 py-2 bg-gray-100 shadow-sm  ">
          <input
            type="search"
            className="w-full border-none outline-none bg-transparent placeholder-gray-500"
            placeholder="Search blogs..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <AiOutlineSearch className="text-gray-500" />
        </div>

         {/* Sort by Newest/Oldest */}
         <div className="ml-6">
          <label htmlFor="sortOrder" className="mr-2">Sort By:</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border-2 rounded px-2 py-1"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>

      </div>

      {/* Blog Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>
    </div>
  )
}

export default SearchInput;
