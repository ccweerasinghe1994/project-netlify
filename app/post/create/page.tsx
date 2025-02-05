"use client";

import { useActionState } from "react";
import { createPost } from "./action";

const initialState = {
  message: "",
};

export default function CreatePostPage() {
  const [state, formAction, isPending] = useActionState(
    createPost,
    initialState
  );
  return (
    <div className="max-w-xl justify-center items-center mx-auto my-10">
      <form
        className="space-y-6 w-full p-6 bg-white rounded-lg shadow-md"
        action={formAction}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Post name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="body" className="text-gray-700 font-medium">
            Post body
          </label>
          <textarea
            name="body"
            id="body"
            rows={4}
            className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        <button
          disabled={isPending}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Create Post
        </button>

        {state.message && (
          <div
            className={`text-white p-2 mt-4 rounded-md ${
              state.message.includes("Error") ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}
