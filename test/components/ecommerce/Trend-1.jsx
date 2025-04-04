import Image from "next/image";

export function Trend1({ image }) {
  return (
    <section className="w-full">
      <div className="container mx-auto bg-[url(/ecommerce/bg-jordans.png)] w-full lg:h-100 h-100 bg-no-repeat bg-center bg-cover grid lg:grid-cols-3 grid-cols-1 justify-center items-center rounded-xl">
        <div className="text-red-800 lg:pl-10 py-7 pl-10">
          <p className="font-bold">New from jordan sports wear</p>
          <h1 className="text-4xl font-extrabold py-4">REACT PRESTO</h1>
          <p>
            With React foam for the most <br /> comfortable Presto ever
          </p>
          <button className="bg-black px-20 py-5 rounded-xl font-bold cursor-pointer mt-3">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
