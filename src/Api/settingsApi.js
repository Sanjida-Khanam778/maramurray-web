import { api } from "./api";

export const settingsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTerms: builder.query({
      query: () => "terms-conditions/",
      providesTags: ["Terms"],
    }),
    updateTerms: builder.mutation({
      query: (content) => ({
        url: "terms-conditions/update/",
        method: "PATCH",
        body: { content },
      }),
      invalidatesTags: ["Terms"],
    }),
    getPrivacy: builder.query({
      query: () => "privacy-policy/",
      providesTags: ["Privacy"],
    }),
    updatePrivacy: builder.mutation({
      query: (content) => ({
        url: "privacy-policy/update/",
        method: "PATCH",
        body: { content },
      }),
      invalidatesTags: ["Privacy"],
    }),
  }),
});

export const {
  useGetTermsQuery,
  useUpdateTermsMutation,
  useGetPrivacyQuery,
  useUpdatePrivacyMutation,
} = settingsApi;
