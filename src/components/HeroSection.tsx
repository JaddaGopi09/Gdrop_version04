
import heroImage from "../assets/G-drop-Hero-Section-banner.jpg"; // Correct path

const HeroSection = () => {
  return (
    <section className="w-full">
      <img
        src={heroImage}
        alt="Shop Local Online"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroSection;
