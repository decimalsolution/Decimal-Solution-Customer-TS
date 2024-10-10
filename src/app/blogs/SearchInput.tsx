"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Article } from "../../../types";
import BlogView from "./blog-view";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  // PaginationEllipsis,
} from "@/components/ui/pagination"; // Import your ShadCN pagination

interface SearchProps {
  newblogs: Article[];
}

const SearchInput = ({ newblogs }: SearchProps) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("newest");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage = 9;

  // Create a sorted version of newblogs based on the sortOrder
  const sortedBlogs =
    sortOrder === "newest"
      ? [...newblogs].reverse() // Create a new array and reverse it
      : newblogs; // Default order

  // Filter blogs based on search key
  const filteredBlogs = sortedBlogs.filter((item) =>
    item.blogTitle.toLowerCase().includes(searchKey.toLowerCase())
  );

  // Get the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Calculate the blogs to show for the current page
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Search Input */}
      <div className="flex flex-col items-center justify-center gap-4 mt-10 md:flex-row md:justify-around">
        {/* Search bar */}
        <div className="flex items-center w-[90%] md:w-[30%] justify-between border-2 border-gray-300 rounded-full px-4 py-2 bg-gray-100 shadow-sm mx-4 md:mx-0">
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
        <div className="flex items-center justify-center w-full md:w-auto mt-4 md:mt-0">
          <label htmlFor="sortOrder" className="mr-2">
            Sort By:
          </label>
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
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
          ))
        ) : (
          <p>No blogs found</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex  justify-center mt-10">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)} 
                    className="cursor-pointer"
                  />
                </PaginationItem>
              )}

              {/* Render page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    {page === currentPage ? (
                      <PaginationLink isActive>{page}</PaginationLink>
                    ) : (
                      <PaginationLink onClick={() => handlePageChange(page)} className="cursor-pointer">
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                )
              )}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext className="cursor-pointer"
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
