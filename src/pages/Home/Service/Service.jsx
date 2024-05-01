import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Service = ({ service }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={service.img} alt={service.title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-dark-2 md:text-2xl font-bold">
          {service.title}
        </h2>

        <div className="card-actions flex justify-between items-center">
          <h3 className="text-color-primary text-lg md:text-xl font-semibold">
            Price : ${service.price}
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

Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
