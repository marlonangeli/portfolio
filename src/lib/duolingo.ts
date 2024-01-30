import { z } from "zod";

const DUOLINGO_API_URL =
  "https://duolingo-tracker.marlonangeli.com.br/api/stats/marlonangeli";

export const DuolingoCourseSchema = z.object({
  title: z.string(),
  xp: z.number(),
});

export const DuolingoUserSchema = z.object({
  username: z.string(),
  streak: z.number(),
  courses: z.array(DuolingoCourseSchema),
  id: z.string(),
  name: z.string(),
  picture: z.string(),
  totalXp: z.number(),
});

export type DuolingoCourse = z.infer<typeof DuolingoCourseSchema>;

export type DuolingoUser = z.infer<typeof DuolingoUserSchema>;

export async function getDuolingoData(): Promise<DuolingoUser> {
  const response = await fetch(DUOLINGO_API_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data: DuolingoUser = await response.json();
  return data;
}
