import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page = 1, limit = 10, search = "", status = "" }) => ({
        url: "accounts/users/",
        params: { page, limit, search, status },
      }),
      providesTags: ["users"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `accounts/users/${id}/status/`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `accounts/users/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),
    getUserDetail: builder.query({
      query: (id) => ({
        url: `accounts/user/detail/${id}/`,
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserStatusMutation,
  useDeleteUserMutation,
  useGetUserDetailQuery,
} = usersApi;
