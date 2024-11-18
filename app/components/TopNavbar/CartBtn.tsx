"use client";

import { useAppSelector } from "@"; // Ensure this path is correct
import { RootState } from "@/lib/store"; // Ensure this path is correct
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartBtn = () => {
  // Destructure the cart from the Redux state using `useAppSelector`
  const { cart } = useAppSelector((state: RootState) => state.carts);

  return (
    <Link href="/cart" className="relative mr-[14px] p-1">
      {/* Cart Icon */}
      <Image
        priority
        src="/icons/cart.svg"
        height={22} // Set the fixed height
        width={22}  // Set the fixed width
        alt="Cart"
        className="max-w-[22px] max-h-[22px]"  // Ensures the icon does not exceed the desired size
      />
      {/* Conditional rendering of the item count if totalQuantities is greater than 0 */}
      {cart && cart.totalQuantities > 0 && (
        <span className="border bg-black text-white rounded-full w-fit px-1 text-xs absolute -top-3 left-1/2 -translate-x-1/2">
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
