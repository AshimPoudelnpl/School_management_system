import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetBlogQuery, useGetBlogCategoriesQuery } from "../../redux/features/contentSlice";

const ITEMS_PER_PAGE = 6;

const BlogGrid = () => {
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetBlogCategoriesQuery();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const blogs = blogData?.data ?? [];
  const categories = categoriesData?.data ?? [];
  
  // Create category filter options
  const blogCategories = useMemo(() => {
    const categoryNames = categories.map(cat => cat.category_name);
    return ["All Categories", ...categoryNames];
  }, [categories]);

  // Filter blogs by category
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All Categories") return blogs;
    
    const selectedCategoryData = categories.find(cat => cat.category_name === selectedCategory);
    
    return selectedCategoryData 
      ? blogs.filter(blog => blog.category_id === selectedCategoryData.category_id)
      : blogs;
  }, [selectedCategory, blogs, categories]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredBlogs]);

  const handleCategoryChange = (category) => { 
    setSelectedCategory(category); 
    setCurrentPage(1); 
  };

  if (blogLoading || categoriesLoading) {
    return (
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-color">Latest Posts</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Articles from around Western School</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Browse recent blog topics covering student experiences, academic support, school culture, and campus updates.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {blogCategories.map((category) => (
            <button 
              key={category} 
              type="button" 
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-3 text-sm font-semibold transition sm:px-6 ${
                selectedCategory === category 
                  ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/60" 
                  : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 sm:text-base">
            Showing <span className="font-semibold text-secondary-color">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? "post" : "posts"}
            {selectedCategory !== "All Categories" && <> in <span className="font-semibold text-secondary-color">{selectedCategory}</span></>}
          </p>
        </div>

        {paginatedBlogs.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {paginatedBlogs.map((blog) => {
              const categoryName = categories.find(cat => cat.category_id === blog.category_id)?.category_name || "Blog";

              return (
                <article 
                  key={blog.id} 
                  className="overflow-hidden border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {blog.image_url && (
                    <img 
                      src={`${import.meta.env.VITE_IMG_URL}${blog.image_url}`} 
                      alt={blog.title} 
                      className="h-60 w-full object-cover" 
                    />
                  )}
                  <div className="p-7">
                    <span className="inline-flex rounded-full bg-primary-color/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color">
                      {categoryName}
                    </span>
                    <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>
                        {new Date(blog.published_date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="mt-6">
                      <Link 
                        to={`/blog/${blog.id}`} 
                        className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary-color transition hover:text-primary-color"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 border border-slate-200 bg-white px-6 py-16 text-center shadow-lg shadow-slate-200/60">
            <h3 className="text-2xl font-bold text-slate-900">No blog posts found</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Try choosing a different category to explore more articles.</p>
            <button 
              type="button" 
              onClick={() => handleCategoryChange("All Categories")} 
              className="mt-6 bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
            >
              Show All
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button 
              type="button" 
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} 
              disabled={currentPage === 1} 
              className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page} 
                type="button" 
                onClick={() => setCurrentPage(page)} 
                className={`min-w-11 px-4 py-3 text-sm font-semibold transition ${
                  currentPage === page 
                    ? "bg-secondary-color text-white shadow-lg shadow-sky-200/60" 
                    : "border border-slate-200 bg-white text-slate-700 hover:border-secondary-color hover:text-secondary-color"
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              type="button" 
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} 
              disabled={currentPage === totalPages} 
              className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;