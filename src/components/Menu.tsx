"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div className="z-50">
      {!open ? (
        <Bars3Icon
          onClick={() => setOpen(true)}
          className="text-emerald-500 h-8 w-8"
        />
      ) : (
        <XMarkIcon
          onClick={() => setOpen(false)}
          className="text-emerald-500 h-9 w-9"
        />
      )}
      {open && (
        <div className="bg-emerald-500 z-50 text-white absolute left-0 gap-8 top-24 w-full flex flex-col items-center justify-center text-3xl py-2">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}
