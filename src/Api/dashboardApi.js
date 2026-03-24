import { api } from "./api";

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => "dashboard/stats/",
      providesTags: ["DashboardStats"],
    }),
    getDashboardPosts: builder.query({
      query: () => "dashboard/posts/",
      providesTags: ["DashboardPosts"],
    }),
    updatePostStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `dashboard/posts/${id}/status/`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["DashboardPosts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `dashboard/posts/${id}/delete/`,
        method: "DELETE",
      }),
      invalidatesTags: ["DashboardPosts"],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetDashboardPostsQuery,
  useUpdatePostStatusMutation,
  useDeletePostMutation,
} = dashboardApi;
