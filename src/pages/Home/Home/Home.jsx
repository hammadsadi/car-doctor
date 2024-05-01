import Nav from "../../Shared/Nav/Nav";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import timeable from "../../../assets/icons/timetable.svg";
import call from "../../../assets/icons/call.svg";
import location from "../../../assets/icons/location.svg";

const Home = () => {
  return (
    <div>
      <Nav />
      {/* Banner */}
      <Banner />

      {/* About */}
      <section className="my-10 md:my-20">
        <About />
      </section>

      {/* Service Section */}
      <section className="mb-10 md:mb-20">
        <div>
          <SectionTitle
            subTitle={"Service"}
            title={"Our Service Area"}
            desc={
              " the majority have suffered alteration in some form, by injected humour,or randomised words which do not look even slightly believable."
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </section>

      {/* Contact Info */}
      <section className="mb-10 md:mb-20">
        <div className="bg-dark-1 w-full py-7 px-8 md:px-14 rounded-md md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-white flex items-center flex-row gap-4">
            <img src={timeable} alt="" className="w-12" />
            <div>
              <h4 className="text-base font-medium">
                We are open monday-friday
              </h4>
              <h2 className="text-2xl font-bold">7:00 am - 9:00 pm</h2>
            </div>
          </div>
          <div className="text-white flex items-center flex-row gap-4">
            <img src={call} alt="" className="w-12" />
            <div>
              <h4 className="text-base font-medium">Have a question?</h4>
              <h2 className="text-2xl font-bold">+2546 251 2658</h2>
            </div>
          </div>
          <div className="text-white flex items-center flex-row gap-4">
            <img src={location} alt="" className="w-12" />
            <div>
              <h4 className="text-base font-medium">
                Need a repair? our address
              </h4>
              <h2 className="text-2xl font-bold">Liza Street, New York</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
