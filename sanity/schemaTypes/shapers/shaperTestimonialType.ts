import { defineField, defineType } from "sanity";

export const shaperTestimonialsType = defineType({
  name: "shaperTestimonial",
  title: "Shaper Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shaper",
      title: "Shaper",
      type: "reference",
      to: [{ type: "shaper" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default shaperTestimonialsType;
