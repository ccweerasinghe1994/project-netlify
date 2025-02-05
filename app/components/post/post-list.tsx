import React from "react";
import Post from "./post";

export type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export async function fetAllPost(): Promise<TPost[]> {
  const jsonPosts = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  const data = (await jsonPosts.json()) as TPost[];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}

export default async function PostList({ limit = 10 }: { limit?: number }) {
  const data = await fetAllPost();

  let limitedData: TPost[] = [];
  if (data.length > 0) {
    limitedData = data.slice(0, limit);
  }

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {limitedData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
