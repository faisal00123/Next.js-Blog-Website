import Image from "next/image.js";
import { useRouter } from "next/router.js";
import React, { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async (id) => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct(id);
  }, [id]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mb-8 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={data.image}
          alt={data.title}
          width={40}
          height={40}
          className=" w-full object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute bottom-6 left-6 z-10">
          <span className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
            {data.category}
          </span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {data.title}
          </h1>
        </header>
        <p className="text-white">{data.description}</p>
        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Share this article
              </h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 text-white transition-all flex items-center justify-center">
                  <span className="sr-only">Share on Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center">
                  <span className="sr-only">Share on Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.852V15.467h-2.958V12h2.958v-2.5c0-2.923 1.747-4.5 4.448-4.5 1.296 0 2.642.235 2.642.235v2.91h-1.47c-1.458 0-1.908.902-1.908 1.833V12h3.23l-.536 3.467h-2.694v8.385C19.612 23.954 24 18.99 24 12z" />
                  </svg>
                </button>
              </div>
            </div>

            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Save for later
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default index;
