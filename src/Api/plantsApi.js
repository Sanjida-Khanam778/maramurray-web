import { api } from "./api";

export const plantsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPlants: builder.query({
      query: ({ page = 1, limit = 50, search = "" }) => ({
        url: "/plants/",
        params: { page, limit, search },
      }),
      providesTags: ["plants"],
    }),
    getPlantDetail: builder.query({
      query: (id) => ({
        url: `/plants/plant/detail/${id}/`,
      }),
      providesTags: ["plants"],
    }),
    addPlant: builder.mutation({
      query: (formData) => ({
        url: "/plants/add/plant/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["plants"],
    }),
    deletePlant: builder.mutation({
      query: (id) => ({
        url: `/plants/plant/${id}/delete/`,
        method: "DELETE",
      }),
      invalidatesTags: ["plants"],
    }),
  }),
});

export const { useGetPlantsQuery, useGetPlantDetailQuery, useAddPlantMutation, useDeletePlantMutation } = plantsApi;
