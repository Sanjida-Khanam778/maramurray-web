import { useState } from "react";
import toast from "react-hot-toast";
import {
  useGetUsersQuery,
  useGetUserDetailQuery,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
} from "../Api/usersApi";

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });

  const {
    data: usersData,
    isLoading,
    error,
  } = useGetUsersQuery({
    page: currentPage,
    limit: 10,
    search: searchTerm,
    status: statusFilter.toLowerCase(),
  });

  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [deleteUser] = useDeleteUserMutation();

  const {
    data: selectedUserDetail,
    isLoading: isDetailLoading,
    error: detailError,
  } = useGetUserDetailQuery(selectedUserId, {
    skip: !selectedUserId,
  });

  const activeUser = selectedUserDetail || selectedUser;

  const handleDeactivateUser = async (id) => {
    try {
      await updateUserStatus({ id, status: "inactive" }).unwrap();
      toast.success("User deactivated successfully");
      setOpenDropdown(null);
    } catch (error) {
      toast.error("Failed to deactivate user");
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id).unwrap();
        toast.success("User deleted successfully");
        setOpenDropdown(null);
      } catch (error) {
        toast.error("Failed to delete user");
      }
    }
  };

  // Map API data to component format
  const users =
    usersData?.data?.map((user) => ({
      id: user.id,
      name: user.full_name || user.email.split("@")[0], // fallback if full_name empty
      email: user.email,
      avatar: user.image || "https://i.pravatar.cc/150?img=12", // default avatar
      status: user.status === "active" ? "Active" : "Inactive",
      projects: user.projects_count,
      posts: user.posts_count,
      joined: new Date(user.joined).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      phone: "+1 (555) 123-4567", // placeholder
      lastActive: "Recently", // placeholder
    })) || [];

  const totalPages = usersData?.total_pages || 1;

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
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* ── Users Table ── */}
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">
              Error loading users: {error.message}
            </div>
          ) : (
            <>
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
                    {users.map((user, index) => (
                      <tr
                        key={user.id}
                        className={`hover:bg-gray-50 transition-colors ${
                          index === users.length - 1 ? "rounded-b-2xl" : ""
                        }`}
                      >
                        <td
                          className={`px-6 py-4 ${
                            index === users.length - 1 ? "rounded-bl-2xl" : ""
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
                              <p className="text-xs text-gray-500">
                                {user.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                              user.status === "Active"
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
                          className={`px-6 py-4 relative ${
                            index === users.length - 1 ? "rounded-br-2xl" : ""
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
                                  setSelectedUserId(user.id);
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* ── User Details Modal ── */}
        {selectedUser && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setSelectedUser(null);
              setSelectedUserId(null);
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                <button
                  onClick={() => {
                    setSelectedUser(null);
                    setSelectedUserId(null);
                  }}
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
                {isDetailLoading ? (
                  <div className="py-12 text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500 mx-auto"></div>
                    <p className="mt-4 text-sm text-gray-600">
                      Loading user details...
                    </p>
                  </div>
                ) : detailError ? (
                  <div className="py-12 text-center text-red-500">
                    Failed to load user details. Please try again.
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-6 mb-8">
                      <img
                        src={
                          activeUser?.avatar ||
                          "https://i.pravatar.cc/150?img=12"
                        }
                        alt={activeUser?.name || "User"}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {activeUser?.name || activeUser?.email}
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
                            {activeUser?.email}
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
                            Joined{" "}
                            {activeUser?.joined
                              ? new Date(activeUser.joined).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  },
                                )
                              : "-"}
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
                            Last active{" "}
                            {activeUser?.last_login
                              ? new Date(activeUser.last_login).toLocaleString()
                              : activeUser?.lastActive || "N/A"}
                          </div>
                        </div>
                      </div>
                         {/* Action Buttons */}
                    <div className="flex flex-col gap-2 min-w-[160px]">
                      <button
                        onClick={() => handleDeactivateUser(activeUser?.id)}
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
                        onClick={() => handleDeleteUser(activeUser?.id)}
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
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                            activeUser?.status === "Active" ||
                            activeUser?.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {activeUser?.status
                            ? activeUser.status === "active"
                              ? "Active"
                              : activeUser.status
                            : "Unknown"}
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
                            {activeUser?.activity?.gardens_created ??
                              activeUser?.projects ??
                              0}
                          </p>
                          <p className="text-xs text-blue-600 font-medium">
                            Gardens Created
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-5 text-center">
                          <p className="text-3xl font-bold text-green-600 mb-1">
                            {activeUser?.activity?.posts ??
                              activeUser?.posts ??
                              0}
                          </p>
                          <p className="text-xs text-green-600 font-medium">
                            Posts
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

   
    </div>
  );
}
