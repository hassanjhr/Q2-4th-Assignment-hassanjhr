import Image from "next/image";
import T200 from "@/app/assets/2000+.png";
import T2000 from "@/app/assets/2000.png";
import T30000 from "@/app/assets/30000+.png";
import Shopnow from "@/app/assets/button-shop-now.png";
import f1 from "@/app/assets/Untitled.png";

const Hero = () => {
  return (
    <>
      <div className="w-auto h-[853px] top-[98px] bg-[#F2F0F1] sm:mt-6 md:h-[683px]  lg:flex gap-10">
        {/*  */}

        <div className="md:pl-[100px] md:pt-[80px] ">
          <div>
            <h2 className="w-[315px] h-[93px] top-[138px] left-[18px] font-bold text-[36px] leading-[34px] pl-[16px] pt-[40px] md:w-[577px] md:h-[173px] md:top-[237px] md:left-[100px] md:font-bold md:text-[64px] md:leading-[64px] ">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
          </div>
          <div className="pt-[40px] pl-[16px] md:pt-[64px] ">
            <p className="w-[358px] h-[50px] top-[251px] left-[16px] font-normal text-[14px] leading-[20px] mt-[20px] md:w-[545px] md:h-[33px] md:top-[442px] md:left-[100px] md:font-normal md:text-[16px] md:leading-[22px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>

          <div>
            <Image
              src={Shopnow}
              alt="Shownow"
              className="w-[358px] h-[60px] top-[325px] left-[16px] mx-auto mt-[24px]  md:w-[210px] md:h-[52px] md:top-[507px] md:eft-[100px] md:mx-1 md:mt-[32px]"
            />
          </div>
          <div className="flex md:w-[596px] md:h-[74px] md:top-[607px] md:left-[100px] gap-[32px] mt-[20px] md:mt-[48px] flex-wrap items-center mx-2 ">
            <Image
              src={T200}
              alt="image"
              className="w-[106px] h-[48] md:w-[141px] md:h-[74px]"
            />
            <Image
              src={T2000}
              alt="image"
              className="w-[117px] h-[48] md:w-[156px] md:h-[74px]"
            />
            <Image
              src={T30000}
              alt="image"
              className="w-[103px] h-[48] top-[461px] left-[144px] md:w-[171px] md:h-[74px]"
            />
          </div>
        </div>
        {/*  */}

        <div className="flex sm:[663px]">
          <Image
            src={f1}
            alt="f1"
            className="h-[448px] w-full top-[503px] sm:h-[663px] sm:mt-5 mt-12"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
