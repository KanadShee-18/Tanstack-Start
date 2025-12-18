import { ShoppingBag01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <>
      <header className="h-16 fixed top-0 inset-x-0 px-5 md:px-10 flex items-center justify-between gap-x-5 bg-white rounded-full max-w-6xl mx-auto border-b shadow-sm font-medium">
        <div className="flex flex-row items-center gap-x-2.5 font-medium md:gap-x-3.5">
          <Link to="/" className="flex items-center gap-x-1.5">
            <HugeiconsIcon
              icon={ShoppingBag01Icon}
              strokeWidth={2}
              className="bg-accent size-9 text-white p-2 rounded-lg shadow"
            />
            Ecomshop
          </Link>
          <nav className="sm:flex items-center gap-x-3 hidden">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            {/* <Link to="/create-product">
                    Create Product
                </Link> */}
          </nav>
        </div>
        <div>
          <Link
            to="/cart"
            className="flex items-center gap-x-1.5 bg-white hover:bg-accent-foreground px-2 rounded-full shadow py-1.5 hover:-translate-y-0.5 hover:shadow-md transition duration-300 ease-in-out"
          >
            Cart
            <span className="size-6 bg-accent rounded-full text-white flex items-center justify-center text-[11px]">
              <p className="pt-0.5 text-shadow-2xs">0</p>
            </span>
            <span className="hidded sm:inline">$0.00</span>
          </Link>
        </div>
      </header>
    </>
  )
}
