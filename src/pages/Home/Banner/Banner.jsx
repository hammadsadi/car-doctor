import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={banner1}
          className="w-full  max-h-[calc(100vh-103px)] object-cover"
        />
        <div
          className="absolute flex flex-col h-full w-full justify-center
        left-0  gap-5  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
        >
          <div className="max-w-md space-y-2 md:space-y-5 pl-3 md:pl-16">
            <h2 className="text-2xl font-bold md:text-4xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="text-white bg-color-primary border border-color-primary md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Discover More
              </button>
              <button className="text-white border border-white md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end gap-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full max-h-[calc(100vh-103px)] object-cover"
        />
        <div
          className="absolute flex flex-col h-full w-full justify-center
        left-0  gap-5  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
        >
          <div className="max-w-md space-y-2 md:space-y-5 pl-3 md:pl-16">
            <h2 className="text-2xl font-bold md:text-4xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="text-white bg-color-primary border border-color-primary md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Discover More
              </button>
              <button className="text-white border border-white md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-5 right-5 justify-end gap-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full max-h-[calc(100vh-103px)] object-cover"
        />
        <div
          className="absolute flex flex-col h-full w-full justify-center
        left-0  gap-5  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
        >
          <div className="max-w-md space-y-2 md:space-y-5 pl-3 md:pl-16">
            <h2 className="text-2xl font-bold md:text-4xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="text-white bg-color-primary border border-color-primary md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Discover More
              </button>
              <button className="text-white border border-white md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end gap-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={banner4}
          className="w-full max-h-[calc(100vh-103px)] object-cover"
        />
        <div
          className="absolute flex flex-col h-full w-full justify-center
        left-0  gap-5  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"
        >
          <div className="max-w-md space-y-2 md:space-y-5 pl-3 md:pl-16">
            <h2 className="text-2xl font-bold md:text-4xl">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-base md:text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="text-white bg-color-primary border border-color-primary md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Discover More
              </button>
              <button className="text-white border border-white md:py-3 md:px-7 rounded py-2 px-2 md:text-lg text-base font-semibold ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 justify-end gap-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
