import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Btn = ({ text, dLink }) => {
  return (
    <Link to={dLink}>
      <button className="text-color-primary border border-color-primary md:py-3 md:px-7 rounded py-2 px-5 md:text-lg text-base font-semibold hover:bg-color-primary hover:text-white transition duration-500">
        {text}
      </button>
    </Link>
  );
};

Btn.propTypes = {
  text: PropTypes.string,
  dLink: PropTypes.string,
};
export default Btn;
