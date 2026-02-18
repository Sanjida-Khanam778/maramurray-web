import { useState } from "react";

const stats = [
  {
    label: "Total Users",
    value: "12,567",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    trend: "+4.2%",
    up: true,
  },
  {
    label: "Active Today",
    value: "1,823",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    trend: "+1.8%",
    up: true,
  },
  {
    label: "Gardens Created",
    value: "8,945",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    trend: "+7.3%",
    up: true,
  },
  {
    label: "Total Plants",
    value: "1,247",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-green-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
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
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Just harvested my first tomatoes from the rooftop garden! So excited! 🍅",
    tags: ["#tomatoes", "#harvest", "#rooftop"],
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=120&h=90&fit=crop",
    status: "published",
  },
  {
    id: 2,
    author: "Liam Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-01",
    text: "Are these aphids on my kale? Need advice on organic pest control. 🐛",
    tags: ["#pests", "#organic", "#help"],
    image: "https://images.unsplash.com/photo-1591857177580-dc32d7abc2a7?w=120&h=90&fit=crop",
    status: "flagged",
  },
  {
    id: 3,
    author: "James Park",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-02",
    text: "My succulent wall is finally complete after 3 months of planning 🌵✨",
    tags: ["#succulents", "#wallgarden", "#diy"],
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=120&h=90&fit=crop",
    status: "published",
  },
  {
    id: 4,
    author: "Sophia Reed",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-03",
    text: "Thinking about starting a community vertical farm in my neighborhood. Who's in? 🌿",
    tags: ["#community", "#verticalfarming", "#urban"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=120&h=90&fit=crop",
    status: "pending",
  },
  {
    id: 5,
    author: "Noah Kim",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
    date: "2024-06-04",
    text: "Morning mist in the greenhouse. Everything is waking up. 🌫️🌱",
    tags: ["#greenhouse", "#morning", "#peace"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=120&h=90&fit=crop",
    status: "published",
  },
];

const statusConfig = {
  published: { label: "published", bg: "bg-[#50614A]", text: "text-white" },
  flagged: { label: "flagged", bg: "bg-red-500", text: "text-white" },
  pending: { label: "pending", bg: "bg-amber-400", text: "text-white" },
};

function PostCard({ post, onStatusChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cfg = statusConfig[post.status];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="flex items-center gap-0">
        {/* Thumbnail */}
        <div className="w-32 h-32 flex-shrink-0 p-4">
          <img src={post.image} alt="post" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Content */}
        <div className="flex-1 py-4">
          <div className="flex items-start justify-between gap-2">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full border-2 border-green-100" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-400">{post.date}</p>
              </div>
            </div>

            {/* Status + Menu */}
            <div className="flex items-center gap-2 relative">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cfg.bg} ${cfg.text}`}>
                {cfg.label}
              </span>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-8 z-10 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-36">
                  {["published", "flagged", "pending"].map((s) => (
                    <button
                      key={s}
                      onClick={() => { onStatusChange(post.id, s); setMenuOpen(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 capitalize"
                    >
                      Mark as {s}
                    </button>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">
                    Delete post
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Post text */}
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">{post.text}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-[#2D3E28] bg-[#C8D8BF] px-2.5 py-0.5 rounded-full font-medium">
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
  const [filter, setFilter] = useState("all");

  const handleStatusChange = (id, newStatus) => {
    setPosts((prev) => prev.map((p) => p.id === id ? { ...p, status: newStatus } : p));
  };

  const filtered = filter === "all" ? posts : posts.filter((p) => p.status === filter);

  return (
    <div className=" bg-[#f3f2ee] p-6 md:p-10 font-sans">
      <div className="mx-auto">

        {/* ── Header ── */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{s.label}</p>
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
            <div className="flex gap-2">
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
            </div>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
            {filtered.length === 0 ? (
              <div className="text-center text-gray-400 py-16 bg-white rounded-2xl border border-gray-100">
                No posts match this filter.
              </div>
            ) : (
              filtered.map((post) => (
                <PostCard key={post.id} post={post} onStatusChange={handleStatusChange} />
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}