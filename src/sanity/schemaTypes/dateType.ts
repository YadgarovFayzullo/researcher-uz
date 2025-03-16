import { defineType } from "sanity";

export default defineType({
  name: "journalYear",
  title: "Годы и выпуски",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Год",
      type: "number",
      validation: (Rule: import("sanity").Rule) =>
        Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: "issues",
      title: "Выпуски",
      type: "array",
      of: [{ type: "string" }],
      description: "Перечислите номера выпусков за год",
    },
  ],
});
