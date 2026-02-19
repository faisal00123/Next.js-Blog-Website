import Image from "next/image";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="group">
      <div className="max-w-72 w-full bg-stone-800 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200/50 transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.title || "Article illustration"}
            fill
            sizes="(max-width: 288px) 100vw, 288px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full">
              {data.category || "Article"}
            </span>
            <span className="text-xs text-gray-400">
              {data.readTime || "5 min read"}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
            {data.title}
          </h3>

          {/* Description */}
          {data.description && (
            <p className="mt-3 text-sm text-white line-clamp-2">
              {data.description}
            </p>
          )}

          {/* Author & Date */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {data.authorImage && (
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src={data.authorImage}
                    alt={data.author || "Author"}
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
              )}
              <span className="text-xs font-medium">
                {data.author || "Staff Writer"}
              </span>
            </div>
            <span className="text-xs">{data.date || "Jan 2024"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
