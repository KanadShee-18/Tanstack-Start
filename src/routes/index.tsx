import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-y-6 bg-white p-6 md:p-10 shadow-md rounded-2xl mt-6 text-shadow-2xs">
        <p className="text-blue-600 font-semibold text-sm uppercase">
          Your favourite e-commerce store
        </p>

        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-800 tracking-tight text-shadow-2xs">
          EcomShop - Your one-stop shop for all your needs
        </h2>

        <Link
          to="/products"
          className="flex items-center gap-x-3 bg-black w-fit text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-2xl group transition duration-300 ease-in-out"
        >
          Browse Products
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="group-hover:translate-x-1 ease-out transition duration-300"
          />
        </Link>
      </div>
    </div>
  )
}
