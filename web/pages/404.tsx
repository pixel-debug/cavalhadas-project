import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="text-center">
        <h1 className="text-blue-900 text-6xl font-bold mb-4">404</h1>
        <p className="text-red-500 text-xl mb-4">Oops! Page not found.</p>
        <p className="text-md mb-8">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Go back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
