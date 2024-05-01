import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import BtnPrimary from "../../Shared/BtnPrimary/BtnPrimary";
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-full lg:w-5/6 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 lg:w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-0 lg:right-4 border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2">
          <h4 className="md:text-xl text-lg font-bold text-color-primary">
            About Us
          </h4>
          <h1 className="text-2xl font-bold md:text-4xl text-dark-1 mt-3 md:mt-5">
            We are qualified & of experience in this field
          </h1>

          <p className="py-3 font-normal text-base text-dark-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-3 font-normal text-base text-dark-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <BtnPrimary text={"Get More Info"} />
        </div>
      </div>
    </div>
  );
};

export default About;
