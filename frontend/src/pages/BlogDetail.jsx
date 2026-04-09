import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetBlogQuery, useGetBlogCategoriesQuery } from "../redux/features/contentSlice";
import Skeleton from "../shared/Skeleton";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetBlogCategoriesQuery();

  const blogs = blogData?.data ?? [];
  const categories = categoriesData?.data ?? [];
  const blog = blogs.find((b) => b.id === parseInt(id));
  const category = categories.find((cat) => cat.category_id === blog?.category_id);

  if (blogLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-gradient-soft py-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <Skeleton variant="image" count={1} />
          <Skeleton variant="text" count={8} className="mt-8" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="glass-card rounded-3xl p-12 max-w-md w-full shadow-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 mb-6">
              <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-3">Blog Post Not Found</h2>
            <p className="text-slate-500 mb-8">The article you are looking for doesn&apos;t exist or has been removed.</p>
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:scale-[1.02]"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-8"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Main article */}
        <article className="glass-card overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/60">
          {blog.image_url && (
            <div className="overflow-hidden">
              <img
                src={`${import.meta.env.VITE_IMG_URL}${blog.image_url}`}
                alt={blog.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-10">
            <div className="mb-6">
              {category && (
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 ring-1 ring-blue-200 mb-4">
                  {category.category_name}
                </span>
              )}

              <h1 className="mt-3 text-3xl font-black text-slate-900 leading-tight sm:text-4xl">
                {blog.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Published:{" "}
                  {new Date(blog.published_date).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <div
                className="text-slate-700 leading-7"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            </div>
          </div>
        </article>

        {/* Related posts */}
        {blogs.filter((b) => b.id !== blog.id).length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-black text-slate-900 mb-6">More Articles</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 3)
                .map((relatedBlog) => {
                  const relatedCategory = categories.find(
                    (cat) => cat.category_id === relatedBlog.category_id,
                  );
                  return (
                    <Link
                      key={relatedBlog.id}
                      to={`/blog/${relatedBlog.id}`}
                      className="card-hover glass-card group overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60 block"
                    >
                      {relatedBlog.image_url && (
                        <div className="overflow-hidden">
                          <img
                            src={`${import.meta.env.VITE_IMG_URL}${relatedBlog.image_url}`}
                            alt={relatedBlog.title}
                            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        {relatedCategory && (
                          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">
                            {relatedCategory.category_name}
                          </span>
                        )}
                        <h4 className="text-base font-bold text-slate-900 line-clamp-2">{relatedBlog.title}</h4>
                        <div
                          className="mt-2 text-sm text-slate-500 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: relatedBlog.description }}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
