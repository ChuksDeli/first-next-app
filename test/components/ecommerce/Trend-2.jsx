import Image from "next/image";

export function Trend2({ img1, img2 }) {
  return (
    <section className="py-5">
      <div className="container mx-auto lg:flex lg:gap-6 grid grid-cols-1 gap-5">
        <div className="relative group">
          <Image
            src={img1}
            width={736}
            height={460}
            alt=""
            className="h-85 object-cover rounded-xl  "
          ></Image>
          <div className="absolute text-2xl bottom-10 left-8 lg:none">
            <p className="text-red-800 text-2xl font-bold">
              Summer Must Haves:
            </p>
            <p className="text-red-800 font-bold">Air Max Dia</p>
          </div>
        </div>

        <div className="relative">
          <Image
            src={img2}
            width={735}
            height={490}
            alt=""
            className=" rounded-xl h-85 object-cover object-center shadow-[10px 10px 10px black, 10px 10px 10px black]"
          ></Image>

          <div className="absolute text-2xl bottom-10 left-8">
            <p className="text-red-800 text-2xl font-bold">
              Air jordan 11 Retro
            </p>
            <p className="text-red-800 font-bold">Low Le</p>
          </div>
        </div>
      </div>
    </section>
  );
}
