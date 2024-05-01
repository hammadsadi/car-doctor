import Nav from "../../Shared/Nav/Nav";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Nav />
      {/* Banner */}
      <Banner />

      {/* About */}
      <section className="my-12 md:my-24">
        <About />
      </section>
    </div>
  );
};

export default Home;
