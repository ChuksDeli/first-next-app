import Image from "next/image";

export function SemiFooter({ image }) {
  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(/ecommerce/red.jpg)] h-100 w-full bg-no-repeat bg-center bg-cover">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="text-black pl-15">
          <p>Create your own design</p>
          <h1 className="text-4xl font-extrabold py-5">
            NIKE REACT PRESTO <br /> BY YOU
          </h1>
          <p>
            Take advantage of brand new, proprietary cushioning <br />{" "}
            texchnology with fresh pair Nike Reacts shoes
          </p>
          <button className="mt-3 bg-black px-7 py-2 font-medium text-white border-1 border-black">
            Create
          </button>
        </div>
        <div>
          <Image width={596} height={418} src={image} alt=""></Image>
        </div>
      </div>
    </section>
  );
}
