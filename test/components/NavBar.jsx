import Link from "next/link";

export function NavBar() {
  return (
    <header className="lg:w-full lg:container lg:mx-auto">
      <nav className="lg:flex lg:justify-between lg:py-5 lg:items-center lg:container lg:mx-auto lg:w-full">
        <h2 className="lg:text-2xl lg:text-blue-600 lg:font-bold">React</h2>
        <ul className="lg:flex lg:gap-10 lg:rounded-4xl lg:px-1 lg:py-1 lg:bg-[rgba(255,255,255,0.2)] lg:border-[1px] lg:border-stone-400 lg:ml-18">
          <Link
            href={"/"}
            className="lg:px-4 lg:py-2 lg:rounded-4xl lg:bg-white lg:text-black lg:font-medium lg:text-xs"
          >
            HOME
          </Link>
          <Link
            href={"/contacts"}
            className="lg:px-4 lg:py-2 lg:font-medium lg:text-xs"
          >
            ABOUT
          </Link>
          <Link
            href={"/ecommerce"}
            className="lg:px-4 lg:py-2 lg:font-medium lg:text-xs"
          >
            SERVICES
          </Link>
          <Link
            href={"/"}
            className="lg:px-4 lg:py-2 lg:font-medium lg:text-xs"
          >
            FAQ
          </Link>
        </ul>
        <button className="lg:px-7 lg:py-3 lg:font-medium lg:text-white lg:bg-blue-600 lg:rounded-4xl lg:text-xs">
          START A PROJECT
        </button>
      </nav>
    </header>
  );
}
