import PageIntroduction from "../components/generic/page-introduction";
import BlogView from "./blog-view";
import { Metadata, Article } from "../../../types";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Dive into the world of insights and expertise on Decimal Solutions' Blogs Page. Explore thought-provoking content covering Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Stay informed, inspired, and ahead in the ever-evolving tech landscape.",
};

export default async function Blogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs, status: ${res.status}`);
    }

    // Ensure that the response is valid before parsing
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!data || !data.data) {
      throw new Error("Invalid JSON structure or no data found");
    }

    const blogs: Article[] = data.data;

    const newblogs = blogs.filter((blog) => !blog.blocked);

    return (
      <div className="mb-16">
        <PageIntroduction title="Blogs" image={"/blogs.png"} />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
          {newblogs.map((blog, index) => (
            <BlogView key={"blog-" + index} blog={blog} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching or parsing blog data:", error);
    return (
      <div className="mb-16">
        <PageIntroduction title="Blogs" image={"/blogs.png"} />
        <p className="text-center mt-10 text-red-500">Failed to load blogs. Please try again later.</p>
      </div>
    );
  }
}
