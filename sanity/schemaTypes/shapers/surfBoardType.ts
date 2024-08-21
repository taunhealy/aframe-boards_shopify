import { defineField, defineType } from "sanity";

export const surfBoardType = defineType({
  name: "surfboard",
  title: "Surfboard Model",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Board Name",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: "shaper",
      title: "Shaper",
      type: "reference",
      to: [{ type: "shaper" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Surfboard Type",
      type: "string",
      options: {
        list: [
          { title: "Shortboard", value: "shortboard" },
          { title: "Longboard", value: "longboard" },
          { title: "Fish", value: "fish" },
          { title: "Funboard", value: "funboard" },
          { title: "Gun", value: "gun" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Board Size",
      type: "object",
      fields: [
        {
          name: "length",
          title: "Length (ft)",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "width",
          title: "Width (in)",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "thickness",
          title: "Thickness (in)",
          type: "number",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "weight",
      title: "Weight (lbs)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "color",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "finSetup",
      title: "Fin Setup",
      type: "string",
      options: {
        list: [
          { title: "Single Fin", value: "single" },
          { title: "Twin Fin", value: "twin" },
          { title: "Thruster", value: "thruster" },
          { title: "Quad Fin", value: "quad" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tailShape",
      title: "Tail Shape",
      type: "string",
      options: {
        list: [
          { title: "Square Tail", value: "square" },
          { title: "Round Tail", value: "round" },
          { title: "Fish Tail", value: "fish" },
          { title: "Swallow Tail", value: "swallow" },
          { title: "Pin Tail", value: "pin" },
        ],
      },
    }),
    defineField({
      name: "waveType",
      title: "Ideal Wave Type",
      type: "string",
      options: {
        list: [
          { title: "Small Waves", value: "small" },
          { title: "Medium Waves", value: "medium" },
          { title: "Big Waves", value: "big" },
        ],
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "productImages",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
      options: {},
    }),
    defineField({
      name: "shopifyProductID",
      title: "Shopify Product ID",
      type: "string",
      description: "Link to Shopify product for purchasing",
    }),
    defineField({
      name: "story",
      title: "Board Story",
      type: "blockContent",
      description:
        "Tell the story behind this surfboard model (design, inspiration, etc.)",
    }),
  ],
});

export default surfBoardType;
