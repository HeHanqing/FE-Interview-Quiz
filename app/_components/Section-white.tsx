import Image from "next/image";
import Card from "./Card";
import Footer from "./Footer";

const SectionWhite = () => {
  return (
    <div className="bg-black">
      <div className="bg-[#F4F4F4] sm:rounded-t-[56px] rounded-t-[32px] 2xl:px-[240px] xl:px-32 md:px-10 sm:px-20 sm:pt-[140px] pt-[72px] flex flex-col items-center justify-center lg:gap-40 gap-20 px-[15px]">
        <section className="flex md:flex-row flex-col justify-start items-center">
          <div className="2xl:pr-56 sm:pr-20 pr-0">
            <p className="lg:text-5xl 2xl:text-[64px] text-[28px]">
              Grow Next-gen Business Smartly
            </p>
            <p className="font-bold sm:mt-28 mt-10">TypoX</p>
            <p className="text-sm sm:mt-6 mt-5">to a broader audience</p>
            <p className="sm:mt-6 mt-5 lg:text-2xl text-sm text-[##1C1C1E] opacity-70">
              An Entrance for Web3 Newcomers: Offering intuitive learning and
              knowledge search Experience A Bridge Connecting Web3 Protocols and
              Global users: Unifying diverse information sources and Web3
              Protocols, reducing entry barriers for a wider audience
            </p>
          </div>
          <div className="bg-white lg:py-32 py-16 rounded-tr-[40px] md:mt-0 mt-10">
            <div className="2xl:w-[700px] 2xl:h-[700px] xl:w-[500px] xl:h-[500px] w-[332px] h-[332px] relative">
              <Image src={"/images/Link.png"} alt="Link" fill />
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full justify-start ">
          <p className="lg:text-5xl 2xl:text-[64px] text-[28px]">
            Grow Next-gen Business Smartly
          </p>
          <div className="flex lg:flex-row flex-col gap-6 lg:mt-16 mt-10">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default SectionWhite;
