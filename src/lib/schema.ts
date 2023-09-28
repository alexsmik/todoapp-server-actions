import { TypeOf, boolean, object, string } from "zod";

export const TodoSchema = object({
  title: string({ required_error: "Title is required" }).min(
    1,
    "Title is required"
  ),
  completed: boolean().optional(),
});

export type TodoSchemaType = TypeOf<typeof TodoSchema>;
