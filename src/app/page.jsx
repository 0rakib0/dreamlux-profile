import AboutUs from "@/components/aboutUs/AboutUs";
import Banner from "@/components/banner/Banner";
import Gellery from "@/components/productGelery/Gellery";
import Projects from "@/components/projects/Projects";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import State from "@/components/state/State";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* banner section */}
      <div>
        <Banner></Banner>
      </div>

      {/* body main section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* state */}
        <div className="bg-white my-6 md:my-12 lg:my-16">
          <State></State>
        </div>
        {/* abount section */}
        <div className="bg-white rounded-lg p-2 my-16 lg:my-16">
          <AboutUs></AboutUs>
        </div>

        {/* why Choose Us section */}
        <div className="bg-white rounded-lg p-2 my-16 lg:my-16">
          <WhyChoose></WhyChoose>
        </div>

        {/* recently delivery product photo gallary */}
        <div className="bg-white rounded-lg p-2 my-16 lg:my-16">
          <Gellery></Gellery>
        </div>

        {/* Recently complated projects */}
        <div className="bg-white rounded-lg p-2 my-16 lg:my-16">
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}
