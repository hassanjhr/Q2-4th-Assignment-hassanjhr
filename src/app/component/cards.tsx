import Image from "next/image";
import Shirt1 from "@/app/assets/shirt1.png";
import Stars4 from "@/app/assets/stars4.png";
import c2 from "@/app/assets/c2.png";
import c3 from "@/app/assets/c3.png";
import c4 from "@/app/assets/c4.png";
import stars3 from "@/app/assets/star3.png";

const Cards = () => {
  return (
    <>
      <div className=" h-auto  sm:h-[444px] ">
        <div className="flex flex-wrap justify-center  gap-4 ">
          {/* 1 */}
          <div className="hidden sm:flex"></div>
          <div className="hidden sm:flex"></div>

          <div className="">
            <div className="">
              <div className=" w-[175px] h-[185px]   sm:w-[295px]  sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={Shirt1} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  T-SHIRT WITH TAPE DETAILS
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={Stars4} alt="" />
                <p className="text-[12px] sm:text-[14px]">4.5/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $120
                </h2>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="">
            <div className="">
              <div className="w-[175px] h-[185px] sm:w-[295px]  sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={c2} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  SKINNY FIT JEANS
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={stars3} alt="" />
                <p className="text-[12px] sm:text-[14px]">3.5/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2 flex gap-[10px]">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $240
                </h2>
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px] text-[#00000066] ">
                  <s>$260</s>
                </h2>

                <div className="sm:w-[58px] sm:h-[28px] w-[42px] h-[20px] bg-[#FF33331A] rounded-lg leading-[16.2px] sm:leading-[13.5px]">
                  <h2 className=" w-[26px] h-[14px] sm:w-[31px] sm:h-[16px]  font-medium sm:font-medium text-[10px] sm:text-[12px]   text-[#FF3333] pt-2   ">
                    -20%
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="hidden xl:flex ">
            <div className="">
              <div className="w-[198px] sm:w-[295px] h-[200.01px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={c3} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px] ">
                  CHECKERED SHIRT
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={Stars4} alt="" />
                <p className="text-[12px] sm:text-[14px]">4.5/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $180
                </h2>
              </div>
            </div>
          </div>

          {/* 4 */}

          <div className=" hidden lg:flex">
            <div className="">
              <div className="w-[198px] sm:w-[295px] h-[200.01px] sm:h-[298px] top-[1217px] sm:top-[1104px] left-4 sm:left-[100px] rounded-[13.42px] sm:rounded-[20px] bg-[#F0EEED]">
                <Image src={c4} alt="shirt" />
              </div>
              <div className="w-[180px] sm:w-[225px] h-[22px] sm:h-[27px] top-[14270.01px] sm:top-[1418px] left-[16px] sm:left-[100px] mt-[10px] sm:mt-4 ">
                <h2 className="font-bold sm:font-bold text-[12px] sm:text-[16px] leading-[21.6px] sm:leading-[27px]  ">
                  SLEEVE STRIPED T-SHIRT
                </h2>
              </div>

              <div className="flex w-[127px] sm:w-[150px] h-[16px] sm:h-[19px] top-[1453.01px] sm:top-[1453px] left-[16px] sm:left-[100px] gap-[11px] sm:gap-[13px] mt-1 sm:mt-2">
                <Image src={Stars4} alt="" />
                <p className="text-[12px] sm:text-[14px]">4.5/5</p>
              </div>

              <div className="w-[46px] sm:w-[55px] h-[27px] sm:h-[32px] mt-1 sm:mt-2 flex gap-[10px]">
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px]">
                  $130
                </h2>
                <h2 className="font-bold sm:font-bold text-[20px] sm:text-[24px] leading-[27px] sm:leading-[32.4px] text-[#00000066]">
                  <s>$160</s>
                </h2>

                <div className="sm:w-[58px] sm:h-[28px] w-[42px] h-[20px] bg-[#FF33331A] rounded-lg leading-[16.2px] sm:leading-[13.5px]">
                  <h2 className=" w-[26px] h-[14px] sm:w-[31px] sm:h-[16px]  font-medium sm:font-medium text-[10px] sm:text-[12px]   text-[#FF3333] pt-2   ">
                    -30%
                  </h2>
                </div>
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

export default Cards;
