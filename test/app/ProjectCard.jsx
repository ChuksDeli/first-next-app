export function ProjectCard({
  src,
  title = "Car",
  description,
  bg = "black",
  className = "",
}) {
  return (
    <div className="w-full lg:flex lg:flex-col lg:gap-3 lg:relative">
      <img className="lg:w-100 rounded-2xl lg:relative" src={src} alt="" />
      <div
        style={{
          backgroundColor: bg,
        }}
        className={`${className}  lg:bg-black lg:w-100 lg:h-50 lg:rounded-tr-2xl rounded-tl-0 lg:rounded-br-2xl lg:rounded-bl-2xl lg:px-5`}
      >
        <div>
          <h2 className="lg:absolute lg:top-36 lg:left-0 lg:bg-black lg:px-10 lg:py-4 lg:border-12 lg:border-l-0 lg:border-b-0 lg:border-t-blue-950 lg:border-r-blue-950 lg:rounded-tr-2xl ">
            {title}
          </h2>
          <span className="lg:absolute lg:w-[25px] lg:h-[25px] lg:bg-transparent lg:rounded-full lg:top-39 lg:left-0 lg:shadow-[-10px_-10px_0px_#162456]"></span>

          <span className="lg:absolute lg:w-[25px] lg:h-[25px] lg:bg-transparent lg:rounded-full lg:top-46.5 lg:left-31.5 lg:shadow-[-10px_10px_0px_black]"></span>

          <span className="lg:absolute lg:w-[25px] lg:h-[25px] lg:bg-transparent lg:rounded-full lg:top-43.5 lg:left-34.5 lg:shadow-[-10px_10px_0px_#162456]"></span>

          <span className="lg:absolute lg:w-[25px] lg:h-[25px] lg:bg-transparent lg:rounded-full lg:top-30 lg:left-0 lg:shadow-[-10px_10px_0px_#162456]"></span>

          <span className="lg:absolute lg:w-[25px] lg:h-[25px] lg:bg-tranparent lg:rounded-full lg:top-39 lg:left-25.5 lg:shadow-[-10px_-10px_0px_#162456] lg:rotate-80"></span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
