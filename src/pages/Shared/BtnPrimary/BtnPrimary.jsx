import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BtnPrimary = ({ text, dLink }) => {
  return (
    <Link to={dLink}>
      <button className="text-white border border-color-primary md:py-3 md:px-7 rounded py-2 px-5 md:text-lg text-base font-semibold bg-color-primary ">
        {text}
      </button>
    </Link>
  );
};
BtnPrimary.propTypes = {
  text: PropTypes.string,
  dLink: PropTypes.string,
};
export default BtnPrimary;
