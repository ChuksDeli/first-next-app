export function Heroo() {
  return (
    <section className=" -z-50">
      <section className="h-full container mx-auto">
        <div className="flex lg:flex-row lg:justify-between justify-between lg:items-center items-center flex-col-reverse">
          <div className="flex lg:flex-col flex-row">
            <img
              className="w-30"
              src="/ecommerce/producct-1-removebg-preview.png"
              alt=""
            />
            <img
              className="w-30"
              src="/ecommerce/producct-2-removebg-preview.png"
              alt=""
            />
            <img
              className="w-30"
              src="/ecommerce/producct-3-removebg-preview.png"
              alt=""
            />
          </div>

          <div className="relative z-0 ">
            <div className="lg:z-50">
              <img
                className="lg:-rotate-20 lg:w-140 w-full lg:z-50 hover:rotate-0 transition-all duration-1000"
                src="/ecommerce/producct-3-removebg-preview.png"
                alt=""
              />
            </div>
            <span className="absolute bg-black h-4 lg:w-110 w-80 bottom-20 z-10 lg:left-20 left-10 rounded-full blur-xl lg:-rotate-15"></span>

            <div className="flex flex-col gap-6 justify-center items-center absolute top-20 lg:left-5 left-10 lg:-z-10 -z-10">
              <p className="lg:text-9xl text-7xl text-gray-950 font-bold opacity-10">
                JORDAN
              </p>
              <p className="lg:text-9xl text-7xl text-gray-950 font-bold opacity-25">
                JORDAN
              </p>
              <p className="lg:text-9xl text-7xl text-gray-950 font-bold opacity-45">
                JORDAN
              </p>
            </div>
          </div>

          <div className=" flex-col gap-10 justify-center items-center hidden lg:block">
            <p className="text-7xl font-bold py-7">JO</p>
            <p className="text-7xl font-bold py-7">RD</p>
            <p className="text-7xl font-bold py-7">AN</p>
          </div>
        </div>
      </section>
    </section>
  );
}
