import Link from "next/link";
import AppButton from "../AppButton";

export function Navbarr() {
  return (
    <header className="">
      <nav className="flex justify-between items-center container mx-auto py-5">
        <img
          className="lg:w-30 w-22 object-contain"
          src="/ecommerce/air-jordan-jumpman-logo-removebg-preview.png"
          alt=""
        />
        <div className=" hidden lg:block">
          <ul className="flex justify-center items-center gap-5">
            <Link href={"/ecommerce/men"} className="font-bold">
              Men
            </Link>
            <Link href={"/ecommerce/women"} className="font-bold">
              Women
            </Link>
            <Link href={"/ecommerce/kids"} className="font-bold">
              Kids
            </Link>
            <Link href={"/ecommerce/customize"} className="font-bold">
              Customize
            </Link>
            <AppButton>login</AppButton>
          </ul>
        </div>

        <ul className="flex justify-center items-center gap-3">
          <Link href={"contact"} className="font-bold">
            Cart
          </Link>
          <Link href={"contact"} className="font-bold">
            Search
          </Link>
          <span className="font-bold block text-3xl px-5 lg:hidden">:::</span>
        </ul>
      </nav>
    </header>
  );
}
