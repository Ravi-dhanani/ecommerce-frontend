import Link from "next/link";
import { useState } from "react";
import ProductDiscount from "./ProductDiscount";
interface IProductRowProps {
  item: any;
}
export default function ProductRowItem(props: IProductRowProps) {
  const { item } = props;

  return (
    <div>
      <div className="relative group cursor-pointer">
        <img
          src={
            item.img
              ? item.img
              : "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"
          }
          className="h-full w-full sm:hover:opacity-0"
        />
        <div className="hidden sm:block absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
          <img src={item.changeImg} className="h-full w-full" />
        </div>
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 duration-300 absolute bottom-0  h-10 w-full bg-green-700">
          <div className="my-2 flex justify-center cursor-pointer">
            <span className="text-center uppercase text-white ">
              View Details
            </span>
          </div>
        </div>
        <div className="absolute top-3 left-2">
          <ProductDiscount />
        </div>
        <div className="absolute top-3 right-2">
          {/* <ProductWishlist item={item} isLike={isLike} setIsLike={setIsLike} /> */}
        </div>
        <div className="hidden sm:block opacity-0 group-hover:opacity-100 duration-300 absolute lg:bottom-12 md:bottom-11 right-3">
          <div className="grid grid-cols-2 gap-x-1  ">
            <div className="bg-white rounded-full p-2 hover:bg-green-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <div className="bg-white rounded-full p-2 hover:bg-green-700 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[14px] overflow-hidden mx-1 mb-2">
        <div
          style={{
            display: "-webkit-box",
            maxWidth: "100%",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          <Link href={"/detail"}>
            <span className="text-lg  font-normal hover:underline cursor-pointer">
              {item.title}
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-[auto_auto] justify-center mt-2 gap-x-2">
          <span className="text-lg line-through text-gray-500">
            Rs. 3,499.00
          </span>
          <span className="text-lg text-gra">Rs. 850.00</span>
        </div>
      </div>
    </div>
  );
}
