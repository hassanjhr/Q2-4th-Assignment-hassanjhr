import Image from "next/image";
import Pic1 from "@/app/assets/pic11.png";
import Pic2 from "@/app/assets/pic2.png";
import Pic3 from "@/app/assets/pic3.png";
import Pic4 from "@/app/assets/pic4.png";
import P1 from "@/app/assets/p1.png";
import P2 from "@/app/assets/p2.png";
import P3 from "@/app/assets/p3.png";
import P4 from "@/app/assets/p4.png";

const Catalog = () => {
  return (
    <>
      <div className="container ]">
        <div className="w-[358px] h-[975px] mx-auto     sm:w-[500px] sm:h-[935px] sm:mx-auto xl:w-[1239px] xl:h-[866px]  md:w-[710px]  md:mx-auto lg:w-[900px]  bg-[#F0F0F0] rounded-3xl   xl:ml-[100px] 2xl:pl-[    ] lg:mx-auto lg:h-[680px] md:h-[510px]">
          <div className="  justify-around items-center ">
            <div className=" col-span-3 lg:w-687px lg:h-[85px] grid items-center justify-around lg:py-[70px] py-[30px]">
              <h2 className="font-bold text-[32px] leading-[36px] lg:text-[48px] lg:leading-[57.6px] text-center">
                BROWSE BY DRESS STYLE
              </h2>
            </div>
            <div className="flex flex-wrap xl:pt-[64px] xl:pl-[45px] lg:pt-[40px] lg:pl-[20px] gap-1 ">
              {/* p1 */}
              <div className="  w-[310px] h-[190px] top-[140px] left-[16px] xl:left-[64px] xl:w-[407px] xl-h[289px] lg:w-[300px] md:w-[250px] md:ml-[15px] xl:top-[192px] md:left-[64px]  rounded-[20px] ">
                <Image src={Pic1} alt="Pic" className="hidden md:flex" />
                <Image
                  src={P1}
                  alt="Pic"
                  className="md:hidden w-[310px] h-[190px] sm:ml-[85px] ml-[20px] "
                />
              </div>

              {/* p2 */}
              <div className="sm:w-[500px]    w-[310px] h-[190px] top-[346px] left-[24px] xl:h-[280px] lg:w-[500px] xl:w-[684px] lg:ml-[10px] md:w-[420px] md:top-[192px] md:left-[491px]  rounded-[20px]  xl:top-[192px] xl:left-[491px]">
                <Image src={Pic2} alt="Pic" className="hidden md:flex" />
                <Image
                  src={P2}
                  alt="Pic"
                  className="md:hidden  w-[310px] h-[190px] sm:ml-[85px] mt-[10px] ml-[20px]"
                />
              </div>
            </div>

            <div className="flex flex-wrap pl-[20px] pt-[25px] gap-5 xl:pl-[45px]  lg:pt-[40px] lg:pl-[25px] md:pl-[15px] md:gap-2 lg:gap-3 xl:gap-3 md:pt-0 ">
              {/* p3 */}
              <div className="   w-[310px] h-[190px] top-[346px] left-[24px] xl:h-[280px] lg:w-[500px] xl:w-[684px] lg:ml-[10px]  md:top-[192px] md:left-[491px] rounded-[20px] xl:top-[192px] xl:left-[491px] md:w-[420px]">
                <Image src={Pic3} alt="Pic " className="hidden md:flex" />
                <Image
                  src={P3}
                  alt="Pic"
                  className="md:hidden  w-[350px] h-[190px] sm:ml-[65px]"
                />
              </div>

              {/* p4 */}
              <div className="  w-[310px] h-[190px] top-[140px] left-[16px] xl:left-[64px] xl:w-[407px] xl-h[289px] lg:w-[300px] xl:top-[192px] md:left-[64px] rounded-[20px] md:w-[250px] ">
                <Image src={Pic4} alt="Pic" className="hidden md:flex" />
                <Image
                  src={P4}
                  alt="Pic"
                  className="md:hidden  w-[310px] h-[190px] sm:ml-[65px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
