// import Background from "https://i.imgur.com/19rGxxt.jpeg";    
import Logo from "../Img/boba.png"


export default function Header() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
              alt="Your Company"
              src='https://i.imgur.com/19rGxxt.jpeg'
              className="h-25"
            />
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Milk + Tea Boba Drinks, Manville NJ
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
        Welcome to the best Boba + Milk Tea in Manville NJ!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/menu"
                className="rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Menu
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  )
}
