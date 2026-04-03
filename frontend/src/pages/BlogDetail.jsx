import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useGetBlogQuery, useGetBlogCategoriesQuery } from "../redux/features/contentSlice";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogData, isLoading: blogLoading } = useGetBlogQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetBlogCategoriesQuery();

  const blogs = blogData?.data ?? [];
  const categories = categoriesData?.data ?? [];
  
  const blog = blogs.find(b => b.id === parseInt(id));
  const category = categories.find(cat => cat.category_id === blog?.category_id);

  if (blogLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-2"
          >
            ← Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {blog.image_url && (
            <img
              src={`${import.meta.env.VITE_IMG_URL}${blog.image_url}`}
              alt={blog.title}
              className="w-full h-96 object-cover"
            />
          )}
          
          <div className="p-8">
            <div className="mb-6">
              {category && (
                <span className="inline-flex rounded-full bg-primary-color/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-color mb-4">
                  {category.category_name}
                </span>
              )}
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span>
                  Published: {new Date(blog.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>
                  Created: {new Date(blog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {blog.description}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs
              .filter(b => b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => {
                const relatedCategory = categories.find(cat => cat.category_id === relatedBlog.category_id);
                
                return (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${relatedBlog.id}`}
                    className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {relatedBlog.image_url && (
                      <img
                        src={`${import.meta.env.VITE_IMG_URL}${relatedBlog.image_url}`}
                        alt={relatedBlog.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      {relatedCategory && (
                        <span className="inline-flex rounded-full bg-primary-color/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color mb-3">
                          {relatedCategory.category_name}
                        </span>
                      )}
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {relatedBlog.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;