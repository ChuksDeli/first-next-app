

export function Hero() {
  return (
    <section className="lg:h-full">
      <div className="lg:text-center">
        <h1 className="lg:text-8xl lg:text-white lg:font-bold lg:text-center lg:py-10">
          Creating Digital <br /> Marketing
          <span className="lg:text-blue-600"> Solution</span>
        </h1>
        <div className="lg:relative">
          <span className="lg:w-100 lg:h-100 lg:rounded-full lg:blur-3xl opacity-30 lg:absolute lg:bg-blue-600 lg:-z-10 lg:-top-70 lg:left-120"></span>
        </div>
        <p className="lg:w-150 mx-auto lg:pb-7">
          we increase revenue and ensure sustainable long-term growth <br /> for
          your business through powerful webfow websites.
        </p>
        <button className="lg:px-7 lg:py-3 lg:font-medium lg:text-white lg:bg-blue-600 lg:rounded-4xl lg:text-xs lg:mb-10">
          Get started
        </button>
        <div className="lg:flex lg:gap-6 lg:justify-center lg:items-center lg:mb-15">
          <span className="lg:w-10 lg:h-1 lg:block lg:bg-blue-300"></span>
          <p>TRUSTED BY AMAZING BRANDS</p>
          <span className="lg:w-10 lg:h-1 lg:block lg:bg-blue-300"></span>
        </div>

        <marquee
          className="text-6xl lg:bg-black lg:h-20 lg:flex lg:justify-center lg:items-center"
          behavior=""
          direction=""
        >
          Boltshift Lightbox FeatherDev Spherule GlobalBank legooispum Boltshift
          Lightbox FeatherDev Spherule GlobalBank legooispum Boltshift Lightbox
          FeatherDev Spherule GlobalBank legooispum Boltshift Lightbox
          FeatherDev Spherule GlobalBank legooispum Boltshift Lightbox
          FeatherDev Spherule GlobalBank legooispum Boltshift Lightbox
          FeatherDev Spherule GlobalBank legooispum
        </marquee>
      </div>
    </section>
  );
}
