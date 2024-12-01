import Image from "next/image";
import cc1 from "@/app/assets/cc1.png";
import Starfive from "@/app/assets/starfive.png";
import cc2 from "@/app/assets/cc2.png";
import cc3 from "@/app/assets/cc3.png";
import cc4 from "@/app/assets/cc4.png";
import starfour from "@/app/assets/starfour.png";
import starthree from "@/app/assets/starthree.png";
import Stars4 from "@/app/assets/stars4.png";

const CardTwo = () => {
  return (
    <>
      <div className=" h-auto  sm:h-[444px] ">
        <div className="flex flex-wrap justify-center gap-4 ">
          {/* */}
          <div className="hidden sm:flex "></div>
          <div className="hidden sm:flex"></div>

          {/* 1 */}
          <div className="">
            <div className="">
              <div className="w-[175px] h-[185px]  sm:w-[295px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={cc1} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  COURAGE GRAPHIC T-SHIRT
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={Starfive} alt="" />
                <p className="text-[12px] sm:text-[14px]">5.0/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2 flex gap-[10px]">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $212
                </h2>
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px] text-[#00000066] ">
                  <s>$232</s>
                </h2>

                <div className="sm:w-[58px] sm:h-[28px] w-[42px] h-[20px] bg-[#FF33331A] rounded-lg leading-[16.2px] sm:leading-[13.5px]">
                  <h2 className=" w-[26px] h-[14px] sm:w-[31px] sm:h-[16px]  font-medium sm:font-medium text-[10px] sm:text-[12px]   text-[#FF3333] pt-2   ">
                    -20%
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="">
            <div className="">
              <div className=" w-[175px] h-[185px]   sm:w-[295px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={cc2} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  VERTICAL STRIPED SHIRT
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={starfour} alt="" />
                <p className="text-[12px] sm:text-[14px]">4.0/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $145
                </h2>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="hidden xl:flex ">
            <div className="">
              <div className="w-[198px] sm:w-[295px] h-[200.01px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={cc3} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[250px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  LOOSE FIT BERMUDA SHORTS
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={starthree} alt="" />
                <p className="text-[12px] sm:text-[14px]">3.0/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $80
                </h2>
              </div>
            </div>
          </div>

          {/* 4 */}

          <div className=" hidden lg:flex">
            <div className="">
              <div className="w-[198px] sm:w-[295px] h-[200.01px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={cc4} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px]  ">
                  FADED SKINNY JEANS
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={Stars4} alt="" />
                <p className="text-[12px] sm:text-[14px]">4.5/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2 flex gap-[10px]">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $210
                </h2>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex"></div>
          <div className="hidden sm:flex"></div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;
