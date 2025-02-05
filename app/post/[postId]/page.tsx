import React from "react";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function PostDetailPage({ params }: Props) {
  const { postId } = await params;
  return (
    <div>
      <h1>PostDetailPage</h1>
      <p>postId: {postId}</p>
    </div>
  );
}
