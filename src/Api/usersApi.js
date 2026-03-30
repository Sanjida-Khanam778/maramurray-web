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
    deactivateUser: builder.mutation({
      query: (id) => ({
        url: `accounts/users/${id}/deactivate/`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    activateUser: builder.mutation({
      query: (id) => ({
        url: `accounts/users/${id}/activate/`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `accounts/users/${id}/delete/`,
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
  useDeactivateUserMutation,
  useActivateUserMutation,
  useDeleteUserMutation,
  useGetUserDetailQuery,
} = usersApi;
