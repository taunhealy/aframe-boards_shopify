import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./posts/blockContentType";
import { categoryType } from "./posts/categoryType";
import { postType } from "./posts/postType";
import { authorType } from "./posts/authorType";
import surfBoardType from "./shapers/surfBoardType"; // Corrected casing
import shaperTestimonialsType from "./shapers/shaperTestimonialType";
import surfGuideType from "./surfGuide/surfGuideType";
import { shaperInterviewType } from "./shapers/shaperInterviewType"; // Added import for shaperInterviewType
import { shaperType } from "./shapers/shaperType"; // Added import for shaperType

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    surfBoardType,
    shaperTestimonialsType,
    surfGuideType,
    shaperInterviewType,
    shaperType,
  ],
};
