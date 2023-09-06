import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CategoryPage() {
  return (
    <div className="flex flex-wrap text-emerald-500">
      {pizzas.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-emerald-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group lg:even:bg-sky-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="lg:text-lg uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden lg:text-lg">
              ${item.price.toFixed(2)}
            </h2>
            <button className=" hidden text-sm group-hover:block uppercase bg-emerald-500 text-white rounded px-4 py-1">
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
