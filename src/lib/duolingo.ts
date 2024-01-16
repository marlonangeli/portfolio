const API_URL =
  "https://duolingo-tracker.marlonangeli.com.br/api/stats/marlonangeli";

export type DuolingoCourse = {
  title: string;
  xp: number;
};

export type DuolingoUser = {
  username: string;
  streak: number;
  courses: DuolingoCourse[];
  id: string;
  name: string;
  picture: string;
  totalXp: number;
};

export async function getDuolingoData(): Promise<DuolingoUser> {
  const response = await fetch(API_URL, {
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
