import { useEffect, useState } from "react";
import { PostCardWithActions } from "./PostCardWithActions";
import {
  useDeletePostMutation,
  useGetDashboardPostsQuery,
  useUpdatePostStatusMutation,
} from "../Api/dashboardApi";

const initialPosts = [
  {
    id: 1,
    author: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Just harvested my first tomatoes from the rooftop garden! So excited! 🍅",
    tags: ["#tomatoes", "#harvest", "#rooftop"],
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=160&h=120&fit=crop",
    status: "published",
  },
  {
    id: 2,
    author: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Just harvested my first tomatoes from the rooftop garden! So excited! 🍅",
    tags: ["#tomatoes", "#harvest", "#rooftop"],
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=160&h=120&fit=crop",
    status: "flagged",
  },
  {
    id: 3,
    author: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Just harvested my first tomatoes from the rooftop garden! So excited! 🍅",
    tags: ["#tomatoes", "#harvest", "#rooftop"],
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=160&h=120&fit=crop",
    status: "published",
  },
  {
    id: 4,
    author: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Just harvested my first tomatoes from the rooftop garden! So excited! 🍅",
    tags: ["#tomatoes", "#harvest", "#rooftop"],
    image:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=160&h=120&fit=crop",
    status: "published",
  },
];

const statusConfig = {
  published: { label: "published", bg: "bg-[#4a6153]", text: "text-white" },
  flagged: { label: "flagged", bg: "bg-red-500", text: "text-white" },
};

function PostCard({ post, onDelete, onFlag, onPublish }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cfg = statusConfig[post.status] || { label: post.status || "Unknown", bg: "bg-gray-500", text: "text-white" };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "N/A";
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="bg-white rounded-2xl transition-shadow duration-200 p-5">
      <div className="flex gap-4">
        {/* Thumbnail */}
        {post.image && (
          <div className="flex-shrink-0">
            <img
              src={post.image}
              alt="post"
              className="w-32 h-24 rounded-xl object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            {/* Author info */}
            <div className="flex items-center gap-2.5">
              <img
                src={post.user_image || "https://via.placeholder.com/40"}
                alt={post.user_name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {post.user_name || "Anonymous"}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDate(post.created_at || post.date)}
                </p>
              </div>
            </div>

            {/* Status + Menu */}
            <div className="flex items-center gap-2 flex-shrink-0 relative">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${cfg.bg} ${cfg.text}`}
              >
                {cfg.label}
              </span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="absolute right-0 top-10 z-20 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-36">
                  {post.status === "published" ? (
                    <button
                      onClick={() => {
                        onFlag(post.id);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        className="w-4 h-4 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                        />
                      </svg>
                      Flag
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onPublish(post.id);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        className="w-4 h-4 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Publish
                    </button>
                  )}
                  <button
                    onClick={() => {
                      onDelete(post.id);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Post text */}
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(post.tags)
              ? post.tags
              : typeof post.tags === 'string'
              ? post.tags.split(",").map((tag) => tag.trim())
              : []
            ).map((tag) => (
              <span
                key={tag}
                className="text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostsManagement() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModalPost, setDeleteModalPost] = useState(null);

  const { data: postsData, isLoading: postsLoading } =
    useGetDashboardPostsQuery();
  const [updatePostStatus] = useUpdatePostStatusMutation();
  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    if (postsData?.data) {
      setPosts(postsData.data);
    }
  }, [postsData]);

  const handleDelete = (id) => {
    setDeleteModalPost(id);
  };

  const confirmDelete = async () => {
    try {
      await deletePost(deleteModalPost).unwrap();
      setDeleteModalPost(null);
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  const handleFlag = async (id) => {
    try {
      await updatePostStatus({ id, status: "flagged" }).unwrap();
    } catch (error) {
      console.error("Failed to flag post:", error);
    }
  };

  const handlePublish = async (id) => {
    try {
      await updatePostStatus({ id, status: "published" }).unwrap();
    } catch (error) {
      console.error("Failed to publish post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f2ee] p-6 md:p-10">
      <div className="mx-auto">
        {/* ── Header ── */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Posts Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Moderate and manage user posts
          </p>
        </div>

        {/* ── Search ── */}
        {/* <div className="mb-6">
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </div> */}

        {/* ── Posts List ── */}
        <div className="flex flex-col gap-4">
          {postsLoading ? (
            <div className="text-center text-gray-400 py-16 bg-white rounded-2xl border border-gray-100">
              Loading posts...
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center text-gray-400 py-16 bg-white rounded-2xl border border-gray-100">
              No posts found.
            </div>
          ) : (
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  post={post}
                  onDelete={handleDelete}
                  onPublish={handlePublish}
                  onFlag={handleFlag}
                />
              );
            })
          )}
        </div>
      </div>

      {/* ── Delete Confirmation Modal ── */}
      {deleteModalPost && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setDeleteModalPost(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Delete Post?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              This will permanently delete this post. This action cannot be
              undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModalPost(null)}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
