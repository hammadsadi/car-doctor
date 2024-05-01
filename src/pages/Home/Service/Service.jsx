import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-dark-2 md:text-2xl font-bold">
          Engine Diagnostics
        </h2>

        <div className="card-actions flex justify-between items-center">
          <h3 className="text-color-primary text-lg md:text-xl font-semibold">
            Price : $20.00
          </h3>
          <Link>
            {" "}
            <FaArrowRightLong className="mt-1 text-color-primary cursor-pointer text-lg md:text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
