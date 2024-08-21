import { defineField, defineType } from "sanity";

export const shaperInterviewType = defineType({
  name: "shaperInterview",
  title: "Shaper Interview",
  type: "document",
  fields: [
    defineField({
      name: "shaper",
      title: "Shaper",
      type: "reference",
      to: [{ type: "shaper" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "interviewDate",
      title: "Interview Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
