import aboutimg from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* About Image */}
        <div className="lg:w-1/2">
          <img
            src={aboutimg} // Replace with your image path
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4 uppercase">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            At VastuPrakara, we are committed to providing you with the best
            Vastu consultation and interior design services to bring harmony and
            peace to your living and working spaces. Our expert team is
            dedicated to helping you improve your environment with solutions
            tailored to your needs.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With years of experience and a passion for design, we believe in the
            power of Vastu Shastra to transform spaces and lives. Whether you're
            seeking advice for your home, office, or any other project, our goal
            is to create environments that support health, prosperity, and
            well-being.
          </p>
          <a
            href="#contact" // Replace with the actual link to the contact section
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
