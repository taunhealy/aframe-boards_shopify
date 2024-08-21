import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const shaperType = defineType({
  name: "shaper",
  title: "Shaper Profile",
  type: "document",
  icon: UserIcon, // Optional: Adding an icon for consistency
  fields: [
    defineField({
      name: "name",
      title: "Shaper Name",
      type: "string",
      validation: (Rule) => Rule.required(), // Optional: validation rule
    }),
    defineField({
      name: "bio",
      title: "Shaper Bio",
      type: "text",
      validation: (Rule) => Rule.max(200), // Optional: limit bio length
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot cropping
      },
    }),
    defineField({
      name: "featuredBoards",
      title: "Featured Surfboards",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "surfboard" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "profileImage",
    },
  },
});

export default shaperType;