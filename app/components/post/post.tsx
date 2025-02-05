import React from "react";
import { TPost } from "./post-list";

type Props = { post: TPost };

export default function Post({ post }: Props) {
  return (
    <div className="sm:w-[300px] md:w-[400px] border px-4 py-2">
      <h1 className="text-xl underline mb-2 font-bold">{post.title}</h1>
      <p className="text-sm">{post.body}</p>
      <p className="">userId: {post.userId}</p>
    </div>
  );
}
