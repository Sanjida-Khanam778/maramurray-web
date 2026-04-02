import { api } from "./api";

export const contactApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation({
      query: (formData) => ({
        url: "contact-us/",
        method: "POST",
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      }),
    }),
  }),
});

export const { useSendContactMessageMutation } = contactApi;
