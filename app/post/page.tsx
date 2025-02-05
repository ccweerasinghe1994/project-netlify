import Link from "next/link";
import { Suspense } from "react";
import PostList from "../components/post/post-list";

export default async function Post() {
  return (
    <>
      <div className="my-10 flex max-w-sm gap-4">
        <h1 className="text-3xl font-bold text-center">All Posts</h1>
        <Link
          href={"/post/create"}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          create post
        </Link>
        <hr className="border-b" />
      </div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <PostList limit={10}></PostList>
      </Suspense>
    </>
  );
}
