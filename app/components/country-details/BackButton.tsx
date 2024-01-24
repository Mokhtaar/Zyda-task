"use client";
import React from "react";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="rounded-md bg-white dark:bg-gray-700/35 mt-6 shadow-md px-6 py-2.5 text-sm font-semibold dark:text-gray-400 ring-1 dark:ring-0 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <span className="mr-2 dark:text-gray-400" aria-hidden="true">
        &larr;
      </span>
      Back
    </button>
  );
};

export default BackButton;
