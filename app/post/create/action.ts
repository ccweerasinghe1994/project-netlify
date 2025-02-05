"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const name = formData.get("name");
    const body = formData.get("body");

    const jsonResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: name as string,
          body: body as string,
          userId: 1,
        }),
      }
    );

    const res = await jsonResponse.json();

    if (jsonResponse.ok) {
      return {
        message: `${res.title} post created successfully`,
      };
    } else {
      return {
        message: `Error: Failed to create post. Status: ${jsonResponse.status}`,
      };
    }
  } catch (error: unknown) {
    return {
      message: `Error creating post: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  } finally {
    revalidatePath("/post");
    redirect("/post");
  }
}
