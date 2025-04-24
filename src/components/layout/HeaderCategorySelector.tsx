import { getAllCategories } from '@/sanity/lib/client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const HeaderCategorySelector = async () => {
  const categories = await getAllCategories();

  return (
    <div className="w-full px-4 py-6 bg-white shadow-sm">
      {/* Logo Top Center */}
      <div className="flex justify-center mb-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Navigation Buttons Centered */}
      <div className="flex justify-center gap-8">
        {/* Categories */}
        <div className="relative inline-block">
          <button className="peer group text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1">
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:rotate-180"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          {/* Categories Dropdown */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-opacity duration-200 z-10">
            <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
              <div className="py-2">
                {categories?.map((category) => (
                  <Link
                    key={category._id}
                    href={`/category/${category.slug.current}`}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-100"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sale */}
        <div className="relative inline-block">
          <button className="peer group text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1">
          
          </button>
          {/* Sale Dropdown */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-opacity duration-200 z-10">
            <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
              <div className="py-2">
                <Link
                  href="/sale/clothing"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-100"
                >
                  Clothing Sale
                </Link>
                <Link
                  href="/sale/electronics"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-100"
                >
                  Electronics Sale
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategorySelector;
