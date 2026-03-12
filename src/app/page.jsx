import Banner from "@/components/banner/Banner";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import State from "@/components/state/State";
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
        <div className="bg-white my-6 md:my-12 lg:my-16">
          <SectionTitle></SectionTitle>
        </div>
      </div>

    </div>
  );
}
