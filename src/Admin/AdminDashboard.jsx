import { useState } from "react";
import { PostCardWithActions } from "./PostCardWithActions";

const stats = [
  {
    label: "Total Users",
    value: "12,567",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
    trend: "+4.2%",
    up: true,
  },
  {
    label: "Active Today",
    value: "1,823",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    trend: "+1.8%",
    up: true,
  },
  {
    label: "Gardens Created",
    value: "8,945",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    trend: "+7.3%",
    up: true,
  },
  {
    label: "Total Plants",
    value: "1,247",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-5 h-5 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
    trend: "-0.5%",
    up: false,
  },
];

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
  published: { label: "published", bg: "bg-[#50614A]", text: "text-white" },
  flagged: { label: "flagged", bg: "bg-red-500", text: "text-white" },
  pending: { label: "pending", bg: "bg-amber-400", text: "text-white" },
};

function PostCard({ post, onDelete, onFlag }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cfg = statusConfig[post.status];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-5">
      <div className="flex gap-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <img
            src={post.image}
            alt="post"
            className="w-32 h-24 rounded-xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            {/* Author info */}
            <div className="flex items-center gap-2.5">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {post.author}
                </p>
                <p className="text-xs text-gray-400">{post.date}</p>
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
            {post.text}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
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

export default function AdminDashboard() {
  const [posts, setPosts] = useState(initialPosts);
  const [deleteModalPost, setDeleteModalPost] = useState(null);

  const handleDelete = (id) => {
    setDeleteModalPost(id);
  };

  const confirmDelete = () => {
    setPosts(posts.filter((p) => p.id !== deleteModalPost));
    setDeleteModalPost(null);
  };

  const handleFlag = (id) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "flagged" ? "published" : "flagged" }
          : p,
      ),
    );
  };

  const handlePublish = (id) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, status: "published" } : p)),
    );
  };

  return (
    <div className=" bg-[#f3f2ee] p-6 md:p-10 font-sans">
      <div className="mx-auto">
        {/* ── Header ── */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Here's what's happening today.
          </p>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  {s.label}
                </p>
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                  {s.icon}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            </div>
          ))}
        </div>

        {/* ── Latest Posts ── */}
        <div>
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <h2 className="text-lg font-bold text-gray-900">Latest Posts</h2>

            {/* Filter pills */}
            {/* <div className="flex gap-2">
              {["all", "published", "flagged", "pending"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition-all duration-150 ${filter === f
                    ? "bg-[#1a3a2a] text-white shadow"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-green-300"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div> */}
          </div>

          {/* ── Posts List ── */}
          <div className="flex flex-col gap-4">
            {posts.length === 0 ? (
              <div className="text-center text-gray-400 py-16 bg-white rounded-2xl border border-gray-100">
                No posts found.
              </div>
            ) : (
              posts.map((post, index) => {
                // Show different card type for demo (image 2 shows Flag/Delete, image 3 shows Publish/Delete)
                if (index === 1) {
                  return (
                    <PostCardWithActions
                      key={post.id}
                      post={post}
                      onDelete={handleDelete}
                      onPublish={handlePublish}
                    />
                  );
                }
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
    </div>
  );
}
