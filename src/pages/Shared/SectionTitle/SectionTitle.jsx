import PropTypes from "prop-types";
const SectionTitle = ({ subTitle, title, desc }) => {
  return (
    <div className="mb-4 md:mb-8 max-w-md mx-auto text-center space-y-2 md:space-y-4">
      <h5 className="font-bold text-lg md:text-xl text-color-primary">
        {subTitle}
      </h5>
      <h2 className="text-2xl font-bold md:text-4xl text-dark-1">{title}</h2>
      <p className="font-normal text-base text-dark-3">{desc}</p>
    </div>
  );
};
SectionTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default SectionTitle;
