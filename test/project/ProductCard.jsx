export function ProductCard({
  image,
  title,
  version,
  color,
  description,
  tag,
  CTA,
}) {
  return (
    <div>
      <div className="lg:w-100 lg:h-138 h-140 relative container mx-auto w-85">
        <div className="bg-linear-to-l from-purple-300 rounded-t-2xl to-purple-700 lg:w-100 ">
          <img className="lg:w-100 lg:object-contain" src={image} alt="" />
        </div>

        <div className="bg-white text-black rounded-2xl absolute bottom-12 lg:-bottom-1 shadow-gray-950 shadow-xl px-5 py-7">
          <h2 className="text-2xl text-stone-700 font-bold">{title}</h2>
          <div className="flex gap-4">
            <p className="py-0 rounded text-stone-600 px-1 border-2 border-stone-400 my-3 font-bold">
              {version}
            </p>
            <p className="py-0 rounded text-stone-600 px-1 border-2 border-stone-400 my-3 font-bold">
              {color}
            </p>
          </div>
          <p className="text-stone-600 font-medium text-[18px] py-3">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-extrabold text-stone-600">PRICE</p>
              <p className="text-3xl font-bold text-stone-700">{tag}</p>
            </div>

            <button className="bg-purple-700 lg:px-13 px-7 lg:py-5 py-4 rounded font-bold text-white cursor-pointer lg:hover:bg-purple-600 lg:transition-all lg:duration-600">
              {CTA}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
