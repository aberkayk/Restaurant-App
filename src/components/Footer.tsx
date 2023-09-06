import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-emerald-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        PIZZAVILLE
      </Link>
      <p>&copy; ALL RIGHTS RESERVED</p>
    </div>
  );
}
