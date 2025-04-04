import Image from "next/image";
import Link from "next/link";

export function Producct({
  image,
  color,
  price,
  title,
  description,
  button,
  buttonColor,
  borderColor,
}) {
  return (
    <section className=" text-black flex rounded-t-3xl group pt-10 mx-auto w-full">
      <div className="">
        <div>
          <div
            style={{
              backgroundImage: `linear-gradient(to top, #fff, ${color})`,
            }}
            className=" rounded-t-3xl relative h-65 w-full"
          >
            <Image
              height={260}
              width={400}
              className="-rotate-25 group-hover:-top-23 -top-10 left-5 w-[80%] absolute transition-all duration-1000"
              src={image}
              alt=""
            />
          </div>
          <div className="bg-white rounded-b-3xl px-5">
            <div className="flex justify-between items-center py-5 ">
              <h2 className="text-4xl font-bold text-stone-700">{title}</h2>
              <h2
                style={{
                  color,
                  border: borderColor,
                }}
                className="font-bold border-2 rounded text-gray-500 px-2"
              >
                {color}
              </h2>
            </div>

            <div>
              <p className="text-black">{description}</p>
            </div>

            <div className="flex justify-between items-center py-5">
              <p className="text-4xl font-bold text-gray-500">{price}</p>

              <Link
                href={"/portfolio"}
                style={{
                  backgroundColor: buttonColor,
                }}
                className="px-25 py-4 rounded-xl text-white font-bold cursor-pointer hover:opacity-80 transition-all duration-700"
              >
                {button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
