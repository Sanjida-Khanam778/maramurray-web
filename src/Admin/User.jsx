import { useState } from "react";
import toast from "react-hot-toast";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    status: "Active",
    projects: 5,
    posts: 14,
    joined: "Jan 15, 2025",
    phone: "+1 (555) 123-4567",
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@email.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    status: "Active",
    projects: 5,
    posts: 14,
    joined: "Feb 20, 2025",
    phone: "+1 (555) 234-5678",
    lastActive: "5 hours ago",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@email.com",
    avatar: "https://i.pravatar.cc/150?img=33",
    status: "Active",
    projects: 5,
    posts: 14,
    joined: "Dec 5, 2024",
    phone: "+1 (555) 345-6789",
    lastActive: "1 day ago",
  },
  {
    id: 4,
    name: "Emily Brown",
    email: "emily@email.com",
    avatar: "https://i.pravatar.cc/150?img=25",
    status: "Inactive",
    projects: 5,
    posts: 14,
    joined: "Nov 12, 2024",
    phone: "+1 (555) 456-7890",
    lastActive: "1 week ago",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@email.com",
    avatar: "https://i.pravatar.cc/150?img=68",
    status: "Active",
    projects: 5,
    posts: 14,
    joined: "Jan 28, 2025",
    phone: "+1 (555) 567-8901",
    lastActive: "30 minutes ago",
  },
];

export default function UsersManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });

  // Filter users
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All Status" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSaveUser = () => {
    if (!formData.name || !formData.email) {
      toast.error("Please fill in required fields");
      return;
    }

    if (editUserId) {
      // Update existing user
      setUsers(
        users.map((u) =>
          u.id === editUserId
            ? { ...u, name: formData.name, email: formData.email }
            : u,
        ),
      );
    } else {
      // Add new user
      const user = {
        id: users.length + 1,
        name: formData.name,
        email: formData.email,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
        status: "Active",
        projects: 0,
        posts: 0,
        joined: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        phone: "+1 (555) 000-0000",
        lastActive: "Just now",
      };
      setUsers([...users, user]);
    }

    setFormData({ name: "", email: "", location: "", password: "" });
    setIsModalOpen(false);
    setEditUserId(null);
  };

  const handleDeleteUser = (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
      setSelectedUser(null);
      setOpenDropdown(null);
    }
  };

  const handleDeactivateUser = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u,
      ),
    );
    setOpenDropdown(null);
  };

  return (
    <div className="min-h-screen bg-[#f3f2ee] p-6 md:p-10">
      <div className=" mx-auto">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Users Management
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and monitor all user accounts
            </p>
          </div>
          {/* <button
            onClick={() => {
              setEditUserId(null);
              setFormData({ name: "", email: "", location: "", password: "" });
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 bg-[#4a6153] hover:bg-[#3d5043] text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add User
          </button> */}
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#C8D8BF]">
          {/* ── Search & Filter ── */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <div className="flex-1 min-w-[250px] relative">
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
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none cursor-pointer min-w-[140px]"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* ── Users Table ── */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm relative">
            <table className="w-full">
              <thead className="bg-[#F5F3ED] border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide rounded-tl-2xl">
                    User
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Project
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Post
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    Joined
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wide rounded-tr-2xl">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`hover:bg-gray-50 transition-colors ${index === filteredUsers.length - 1 ? "rounded-b-2xl" : ""
                      }`}
                  >
                    <td
                      className={`px-6 py-4 ${index === filteredUsers.length - 1 ? "rounded-bl-2xl" : ""
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${user.status === "Active"
                          ? "bg-[#DCFCE7] text-[#008236]"
                          : "bg-[#F3F4F6] text-[#364153]"
                          }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {user.projects}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {user.posts}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.joined}
                    </td>
                    <td
                      className={`px-6 py-4 relative ${index === filteredUsers.length - 1 ? "rounded-br-2xl" : ""
                        }`}
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === user.id ? null : user.id,
                          )
                        }
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
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

                      {openDropdown === user.id && (
                        <div className="absolute right-0 top-12 z-[99999] bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-44">
                          <button
                            onClick={() => {
                              setSelectedUser(user);
                              setOpenDropdown(null);
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
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                            </svg>
                            View Details
                          </button>
                    
                          <button
                            onClick={() => handleDeactivateUser(user.id)}
                            className="w-full text-left px-4 py-2.5 text-sm text-orange-600 hover:bg-orange-50 flex items-center gap-2"
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
                                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                            Deactivate
                          </button>
                          <div className="border-t border-gray-100 my-1" />
                          <button
                            onClick={() => handleDeleteUser(user.id)}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── User Details Modal ── */}
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-4 p-6 border-b border-gray-100">
              <button
                onClick={() => setSelectedUser(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  User Details
                </h2>
                <p className="text-sm text-gray-500">
                  Complete user information and activity
                </p>
              </div>
            </div>

            <div className="p-6">
              {/* User Info */}
              <div className="flex items-start gap-6 mb-8">
                <img
                  src={selectedUser.avatar}
                  alt={selectedUser.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {selectedUser.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      {selectedUser.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      {selectedUser.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      Joined {selectedUser.joined}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                      </svg>
                      Last active {selectedUser.lastActive}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 min-w-[160px]">
                
                  <button
                    onClick={() => handleDeactivateUser(selectedUser.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>
                    Deactivate
                  </button>
                  <button
                    onClick={() => handleDeleteUser(selectedUser.id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-400 hover:bg-red-500 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
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
              </div>

              {/* Account Details */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-gray-900 mb-3">
                  Account Details
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${selectedUser.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {selectedUser.status}
                  </span>
                </div>
              </div>

              {/* Activity */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">
                  Activity
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">
                      {selectedUser.projects}
                    </p>
                    <p className="text-xs text-blue-600 font-medium">
                      Gardens Created
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 text-center">
                    <p className="text-3xl font-bold text-green-600 mb-1">
                      {selectedUser.posts}
                    </p>
                    <p className="text-xs text-green-600 font-medium">Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── User Form Modal (Add/Edit) ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {editUserId ? "Edit User" : "Add New User"}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {editUserId
                    ? "Update user details"
                    : "Create a new user account"}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="New York, NY"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-3 p-6 border-t border-gray-100">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="flex-1 px-4 py-2.5 bg-[#6b7c71] hover:bg-[#5a6a5f] text-white font-semibold rounded-lg transition-colors"
              >
                {editUserId ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
